require('dotenv').config();
require('./src/config/database');

const User = require('./src/model/user');

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const auth = require('./src/middleware/auth');

var app = express();
app.use(express.json());

app.get('/welcome', auth, async (req, res) => {
    const user = await User.findById(req.user_id);
    res.send(`Welcome to the API user ${user.first_name} ${user.last_name}`);
});

app.post('/register', async (req, res) => {

    try {
        const { first_name, last_name, email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send('Email and password are required');
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).send('User already exists');
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        //Create token
        const token = jwt.sign({ user_id: newUser._id, email: newUser.email },
            process.env.JWT_SECRET, { expiresIn: '1h' });

        newUser.token = token;

        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/login', async (req, res) => {
    // Login logic
    try {
        const { email, password} = req.body;

        if (!(email && password)) {
            return res.status(400).send('Email and password are required');
        }

        const user = await User.findOne({ email});

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ user_id: user._id, email: user.email },
                process.env.JWT_SECRET, { expiresIn: '1h' });

            user.token = token;

            res.status(200).send(user);
        } else {
            return res.status(401).send('Invalid email or password');
        }
    }
    catch(error) {
        res.status(500).send(error.message);
    }
})

app.use(express.json());

module.exports = app;
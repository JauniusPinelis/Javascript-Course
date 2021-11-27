require('dotenv').config();
require('./src/config/database');

const User = require('./src/model/user');

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
    const {first_name, last_name, email, password} = req.body;

    if (!(email && password)) {
        return res.status(400).send('Email and password are required');
    }

    const user = await User.findOne({email});

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
    const token = jwt.sign({user_id: newUser._id, email: newUser.email},
        process.env.JWT_SECRET, {expiresIn: '1h'});
    
    newUser.token = token;

    res.status(201).send(newUser);
});

app.post('/login', (req, res) => {
    // Login logic
})

app.use(express.json());

module.exports = app;
const express = require('express');
const db = require('./database/database');

const {signup, signin} = require('./controllers/auth.controller')

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/signup", signup);

app.post("/signin", signin);

module.exports = app;
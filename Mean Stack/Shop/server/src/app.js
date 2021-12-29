const express = require('express');
const registerRoutes = require('./routes');

const dotenv = require('dotenv');
dotenv.config();

var app = express();

app.use(express.json());

registerRoutes(app);

module.exports = app;
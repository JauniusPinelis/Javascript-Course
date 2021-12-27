const express = require('express');
const registerRoutes = require('./routes');

const dotenv = require('dotenv');
dotenv.config();

var app = express();

registerRoutes(app);

module.exports = app;
const express = require('express');
const cors = require('cors');

const registerRoutes = require('./routes');

const dotenv = require('dotenv');
dotenv.config();

var app = express();

app.use(express.json());
app.use(cors());

registerRoutes(app);

module.exports = app;
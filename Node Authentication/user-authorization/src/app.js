const express = require('express');
const db = require('./database/database');

const app = express();

app.use(express.json());

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

module.exports = app;
const dbConfig = require('../configs/db.config');
const mongoose = require('mongoose');

const db = {}

db.url = dbConfig.dbUrl;
db.mongoose = mongoose;
db.users = require('./user.model')(mongoose);

module.exports = db;
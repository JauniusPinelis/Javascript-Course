const mongoose = require('mongoose');

const MONGO_URI = process.env.DB_CONNECTION_STRING;

const db = mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`Connected to db ${MONGO_URI}`)
    })
    .catch((error) => {
        console.log(`Could not connect to db ${MONGO_URI}`)
        console.log(error);
        process.exit(1);
    })

exports = db;
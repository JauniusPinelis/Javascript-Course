mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Connected to database');
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = connect;
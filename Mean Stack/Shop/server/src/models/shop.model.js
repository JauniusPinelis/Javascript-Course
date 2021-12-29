const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: String,
    createdUtc: Date
});

const shopModel = mongoose.model('Shop', shopSchema);

module.exports = shopModel;
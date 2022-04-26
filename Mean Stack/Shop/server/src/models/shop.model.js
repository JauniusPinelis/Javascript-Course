const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: String,
    description: String,
    createdUtc: Date,
    shopItems: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'ShopItem'}
    ]
});

const shopModel = mongoose.model('Shop', shopSchema);

module.exports = shopModel;
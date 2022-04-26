const mongoose = require('mongoose');

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

const shopItemSchema = new mongoose.Schema({
    name: String,
    price: {type: Number, get: getPrice, set: setPrice },
    shopId: {type: mongoose.Schema.Types.ObjectId, ref: 'Shop'}
})

const shopItemModel = new mongoose.model("ShopItem", shopItemSchema);

module.exports = shopItemModel;



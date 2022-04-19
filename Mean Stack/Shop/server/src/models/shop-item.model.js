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
    shopId: String
})

const shopItemModel = new mongoose.model("Shopitem", shopItemSchema);

module.exports = shopItemModel;



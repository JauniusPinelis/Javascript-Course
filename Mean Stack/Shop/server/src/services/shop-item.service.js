const shopItemModel = require("../models/shop-item.model")

const getShopItems = async () => {
    var entities = await shopItemModel.find({});

    return entities;
}

module.exports = {
    getShopItems
}
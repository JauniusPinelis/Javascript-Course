const shopItemModel = require("../models/shop-item.model")
const shopModel = require("../models/shop.model");

const getShopItems = async () => {
    var entities = await shopItemModel.find({});

    return entities;
}

const createShopItem = async (createUser) => {
    if (createUser.shopId != null){
        var shop = await shopModel.findById(createUser.shopId)
        if (shop == null){
            throw new Error("shop is not found");
        }
    }

    let shopItem = await shopItemModel.create(createUser);

    return shopItem;
}

module.exports = {
    getShopItems,
    createShopItem
}
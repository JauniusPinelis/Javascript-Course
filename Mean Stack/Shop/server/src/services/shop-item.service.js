const shopItemModel = require("../models/shop-item.model")
const shopModel = require("../models/shop.model");

const mapDto = (shopItemEntity) => {
   
    let dto = {
        id : shopItemEntity._id,
        name: shopItemEntity.name,
        price: shopItemEntity.price,
        shopId: shopItemEntity.shopId,
    }

    return dto;
}

const getShopItems = async () => {
    var entities = await shopItemModel.find({});

    return entities.map(e => mapDto(e));
}

const getShopItemsByShopId = async (shopId) => {
    var shopItems = await shopItemModel.find({shopId});
    return shopItems.map(e => mapDto(e));
}

const removeShopItem = async (id) => {
    let shopItem = await shopItemModel.findById(id);
    if (shopItem == null){
        var error = new Error("Shop item was not found");
        error.type = "NOT_FOUND";
        throw error;
    }

    await shopItemModel.findOneAndDelete({_id: id});
}

const createShopItem = async (createUser) => {
    var shop = await shopModel.findById(createUser.shopId)
    if (shop == null){
        throw new Error("shop is not found");
    }

    let shopItem = await shopItemModel.create(createUser);

    return shopItem;
}

module.exports = {
    getShopItems,
    createShopItem,
    getShopItemsByShopId,
    removeShopItem
}
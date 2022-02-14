const shopModel = require('../models/shop.model');

const getShopById = async (id) => {
    var shop = await shopModel.findById(id);
    return shop;
}

const updateShop = async (id, body) => {

    await shopModel.findByIdAndUpdate(id, body);

    var updatedShop = shopModel.findById(id);

    var updatedShopObject = updatedShop.toJSON();

    var updatedShopDto = {
        id: updatedShopObject._id,
        name: updatedShopObject.name,
        description: updatedShopObject.description,
        createdUtc: updatedShopObject.createdUtc,
    }

    return updatedShopDto;
}

const createShop = async (request) => {
    var shop = new shopModel();

    shop.name = request.name;
    shop.createdUtc = new Date(new Date().toUTCString()) //date in utc
    
    await shop.save();

    return shop._id;
}

const removeShop = async (id) => {
    await shopModel.findByIdAndDelete(id);
}

const getShops = async () => {
    const shopEntities = await shopModel.find({});

    shopDtos = [];

    shopEntities.forEach((shopEntity) => {
        const dto = {
            id: shopEntity._id,
            name: shopEntity.name,
            description: shopEntity.description,
            createdUtc: shopEntity.createdUtc,
        }

        shopDtos.push(dto);
    })

    return shopDtos;
}

module.exports = {
    createShop,
    getShops,
    removeShop,
    getShopById,
    updateShop
}
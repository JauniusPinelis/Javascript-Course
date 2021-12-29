const shopModel = require('../models/shop.model');


const createShop = async (request) => {
    var shop = new shopModel();

    shop.name = request.name;
    shop.createdUtc = new Date(new Date().toUTCString()) //date in utc
    
    await shop.save();

    return shop._id;
}

const getShops = async () => {
    const shopEntities = await shopModel.find({});

    shopDtos = [];

    shopEntities.forEach((shopEntity) => {
        const dto = {
            id: shopEntity._id,
            name: shopEntity.name,
            createdUtc: shopEntity.createdUtc,
        }

        shopDtos.push(dto);
    })

    return shopDtos;
}

module.exports = {
    createShop,
    getShops
}
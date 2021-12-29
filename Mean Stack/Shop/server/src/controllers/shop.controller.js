const { getShops, createShop } = require("../services/shop.service");

const createShopHandler = async (req, res) => {
    try {
        //TODO: validation
        const shopId = await createShop(req.body);

        res.status(201).json({
            message: 'Shop created successfully',
            shopId: shopId
        });
    }
    catch(err){
        res.status(500).json({
            message: 'Error creating shop'
        });
    }
    // the logic to create shop
   
}

const getShopsHandler = async (req, res) => {
    try {
        const shops = await getShops();
        //TODO: remap model to dtos (Data Transfer Objects)

        res.status(200).send(shops);
    }
    catch(err){
        res.status(500).send({
            message: 'Error getting shops'
        })
    }
}

module.exports = {
    createShopHandler,
    getShopsHandler
}
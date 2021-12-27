const { getShops, createShop } = require("../services/shop.service");

const createShopHandler = (req, res) => {
    try {
        const shopId = createShop(req.body);

        res.status(200).json({
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

const getShopsHandler = (req, res) => {
    // the logic to get all shops
    res.status(200).json({
        message: 'Shops retrieved successfully'
    });
}

module.exports = {
    createShopHandler,
    getShopsHandler
}
const {getShopItems} = require('../services/shop-item.service');

const getShopItemsHandler = async (req,res) => {
    try {
        var shops = await getShopItems();

        return res.status(200).send(shops);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
  
}

module.exports = {
    getShopItemsHandler
}
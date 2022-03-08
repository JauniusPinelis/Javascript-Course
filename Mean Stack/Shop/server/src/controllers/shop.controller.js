const { getShops, createShop, removeShop, getShopById, updateShop } = require("../services/shop.service");

const updateShopHandler = async (req, res) => {
    try {
        let id = req.params.id;
        let bodyUpdate = req.body;

        const updatedShop = await updateShop(id, bodyUpdate);

        res.status(200).send(updatedShop);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

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

const getShopByIdHandler = async (req, res) => {
    try {
        shop = await getShopById(shopId);
        if (shop == null) {
            res.status(404).send({
                message: 'Shop not found'
            });
           return;
        }

        res.status(200).send(shop);
    }
    catch(err){
        res.status(500).send({
            message: 'Error getting shop'
        })
    }
}

const removeShopHandler = async (req, res) => {
    try {
        var shopId = req.params.id;

        shop = await getShopById(shopId);
        if (shop == null) {
            res.status(404).send({
                message: 'Shop not found'
            });
           return;
        }

        await removeShop(shopId);

        res.status(204).send();
    }
    catch(err){ res.status(500).send({
        message: 'Error deleting the shop'
    })}
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
    getShopsHandler,
    removeShopHandler,
    updateShopHandler
}
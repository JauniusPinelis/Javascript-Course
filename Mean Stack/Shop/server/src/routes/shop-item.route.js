const {getShopItemsHandler, createShopItemHandler, deleteShopItemHandler} = require('../controllers/shop-item.controller');

const registerShopItemRoutes = (app) => {
    app.get('/shop-item', getShopItemsHandler);
    app.post('/shop-item', createShopItemHandler);
    app.delete('/shop-item/:id', deleteShopItemHandler)
}

module.exports = registerShopItemRoutes;
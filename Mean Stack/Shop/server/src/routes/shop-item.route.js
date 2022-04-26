const {getShopItemsHandler, createShopItemHandler} = require('../controllers/shop-item.controller');

const registerShopItemRoutes = (app) => {
    app.get('/shop-items', getShopItemsHandler);
    app.post('/shop-items', createShopItemHandler);
}

module.exports = registerShopItemRoutes;
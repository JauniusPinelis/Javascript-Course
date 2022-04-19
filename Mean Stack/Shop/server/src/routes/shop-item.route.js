const {getShopsHandler} = require('../controllers/shop-item.controller');

const registerShopItemRoutes = (app) => {
    app.get('/shop-items', getShopsHandler);
}

module.exports = registerShopItemRoutes;
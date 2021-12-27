const {createShopHandler, getShopsHandler} = require('../controllers/shop.controller');

const registerShopRoutes = (app) => {
    app.get('/shop', getShopsHandler);
    app.post('/shop', createShopHandler);
}

module.exports = registerShopRoutes;
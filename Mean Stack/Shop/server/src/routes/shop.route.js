const {createShopHandler, getShopsHandler, removeShopHandler} = require('../controllers/shop.controller');

const registerShopRoutes = (app) => {
    app.get('/shop', getShopsHandler);
    app.post('/shop', createShopHandler);
    app.delete('/shop/:id', removeShopHandler);
}

module.exports = registerShopRoutes;
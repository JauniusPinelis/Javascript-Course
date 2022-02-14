const {createShopHandler, getShopsHandler, removeShopHandler, updateShopHandler} = require('../controllers/shop.controller');

const registerShopRoutes = (app) => {
    app.get('/shop', getShopsHandler);
    app.post('/shop', createShopHandler);
    app.delete('/shop/:id', removeShopHandler);
    app.put('/shop/:id', updateShopHandler )
}

module.exports = registerShopRoutes;
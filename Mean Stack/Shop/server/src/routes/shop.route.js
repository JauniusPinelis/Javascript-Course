const {createShopHandler, getShopsHandler, removeShopHandler, updateShopHandler,
    getShopByIdHandler
    } = require('../controllers/shop.controller');

const registerShopRoutes = (app) => {
    app.get('/shop', getShopsHandler);
    app.post('/shop', createShopHandler);
    app.delete('/shop/:id', removeShopHandler);
    app.put('/shop/:id', updateShopHandler );
    app.get('/shop/:id', getShopByIdHandler);
}

module.exports = registerShopRoutes;
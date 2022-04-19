const registerHealthRoutes = require('./routes/health.route');
const registerShopItemRoutes = require('./routes/shop-item.route');
const registerShopRoutes = require('./routes/shop.route');

const registerRoutes = (app) => {
    registerHealthRoutes(app);
    registerShopRoutes(app);
    registerShopItemRoutes(app);
}

module.exports = registerRoutes;
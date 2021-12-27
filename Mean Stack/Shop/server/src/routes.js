const registerHealthRoutes = require('./routes/health.route');
const registerShopRoutes = require('./routes/shop.route');

const registerRoutes = (app) => {
    registerHealthRoutes(app);
    registerShopRoutes(app);
}

module.exports = registerRoutes;
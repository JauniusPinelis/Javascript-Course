const registerHealthRoutes = (app) => {
    app.get('/healthcheck', (req,res) => {
        res.send('Healthy');
    })
}

module.exports = registerHealthRoutes;
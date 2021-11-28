const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token =  req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. No token provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user_id = decoded.user_id;
        //return next();
    }
    catch(error) {
        return res.status(401).send(error.message);
    }
}

module.exports = verifyToken;
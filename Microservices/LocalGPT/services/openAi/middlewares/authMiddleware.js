require('dotenv').config();

const axios = require('axios');

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token missing.' });
    }

    const response = await axios.post(process.env.AUTH_URL, {token});

    if (!response.data.isValid){
        return res.status(400).json({ message: 'Token is invalid.' });
    }
       
    req.user = response.user;
    next();
    
};

module.exports = verifyToken;

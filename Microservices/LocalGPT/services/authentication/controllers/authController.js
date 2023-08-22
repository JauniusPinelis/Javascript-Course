const authService = require('../services/authService');

async function signup(req,res,next){
  try {
    const { username, email, password } = req.body;
    const result = await authService.signup(username, email, password);

    res.json(result);
  }
  catch (err){
    next(err);
  }
  
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({ token });
  }
  catch (err){
    next(err);
  }
}

module.exports = {
  signup,
  login
};

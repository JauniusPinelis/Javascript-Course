const jwt = require('jsonwebtoken');
const authRepository = require('../repositories/authRepository')

async function verify(token){
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (decoded){
    return {
      username: decoded.username,
      isValid: true
    }
  }
  return {
    isValid: false
  }
}

async function signup(username, email, password) {
  const user = await authRepository.getUserByUsername(username);

  if (user){
    const error = new Error("Username already exists");
    error.statusCode = 400
    throw error;
  }

  await authRepository.createUser(username, email, password);

  return { message: 'User registered successfully' };
}

 const login = async (username, password) => {

  const result = await authRepository.getUserByUsernameAndPassword(username, password);

  if (result.length == 0){
    const error = new Error("Username or Password is incorrect")
    error.statusCode = 400;
    throw error;
  }

  const user = result[0]

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}

module.exports = {
  login,
  signup,
  verify
};

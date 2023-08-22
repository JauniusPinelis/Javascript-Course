const database = require('../database/database'); // Import your database connection module here

const getUserByUsernameAndPassword = async (username, password) => {
  const query = "select * from users where username = $1 and password = $2";
  const result = await database.executeQuery(query, [username, password]);
  return result.rows;
};

const getUserByUsername = async (username) => {
  const query = "select * from users where username = $1"
  const result = await database.executeQuery(query, [username]);
  if (result.rows.length > 0){
    return result.rows[0]
  }
  return undefined;
}

const createUser = async (username, email, password) => {
  const query = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
  await database.executeQuery(query, [username, email, password]);
}

module.exports = {
  getUserByUsernameAndPassword,
  getUserByUsername,
  createUser
};

const pool = require("./pool");

function createUser(username, password) {
  return pool.query(
    "INSERT INTO users (username, password, permision) VALUES ($1, $2, 'guest')",
    [username, password]
  );
}

module.exports = {
  createUser,
};

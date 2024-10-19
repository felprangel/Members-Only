const pool = require("./pool");

function createUser(username, password) {
  return pool.query(
    "INSERT INTO users (username, password, permision) VALUES ($1, $2, 'guest')",
    [username, password]
  );
}

async function getUserById(id) {
  const { rows } = await pool.query(
    "SELECT id, username, password, permission FROM users WHERE id = $1",
    [username]
  );
  return rows[0];
}

async function getUserByUsername(username) {
  const { rows } = await pool.query(
    "SELECT id, username, password, permission FROM users WHERE username = $1",
    [username]
  );
  return rows[0];
}

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
};

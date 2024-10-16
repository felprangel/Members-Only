const db = require("../db/queries");

function createUser(req, res) {
  const { username, password } = req.body;
  db.createUser(username, password);
}

module.exports = {
  createUser,
};

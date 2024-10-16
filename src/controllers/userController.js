const db = require("../db/queries");

function createUser(req, res) {
  const { username, password } = req.body;
  db.createUser(username, password)
    .then(() => {
      res.status(201).json({ message: "User created" });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
}

module.exports = {
  createUser,
};

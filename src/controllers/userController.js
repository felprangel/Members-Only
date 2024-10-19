const db = require("../db/queries");

async function createUser(req, res) {
  // TODO: Adicionar confirmação de senha
  const { username, password } = req.body;
  try {
    bcrypt.hash(password, 10, async (err, hashedPassword) => {
      if (err) {
        throw new Error(err);
      }
      await db.createUser(username, hashedPassword);
      res.redirect("/");
    });
  } catch (err) {
    return next(err);
  }
}

function createMessage(req, res) {
  // TODO: Adicionar validação de autenticação
  // TODO: Adicionar envio do id do usuário
  const { title, messageBody } = req.body;
  db.createMessage(title, messageBody);
}

module.exports = {
  createUser,
  createMessage,
};

const db = require("../db/queries");

function createUser(req, res) {
  // TODO: Adicionar segurança de senha
  // TODO: Adicionar confirmação de senha
  const { username, password } = req.body;
  db.createUser(username, password);
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

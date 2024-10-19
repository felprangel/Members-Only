const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
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

function login(req, res) {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  });
}

function logout(req, res, next) {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
}

async function createMessage(req, res) {
  // TODO: Adicionar validação de autenticação
  // TODO: Adicionar envio do id do usuário
  const { title, messageBody } = req.body;
  await db.createMessage(title, messageBody);
}

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = db.getUserByUsername(username);

      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = db.getUserById(id);

    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = {
  createUser,
  login,
  logout,
  createMessage,
};

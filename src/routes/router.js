const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});
router.get("/sign-up", async (req, res) => {
  res.render("sign-up-form");
});
router.get("/login", async (req, res) => {
  res.render("login-form");
});
router.get("/message", async (req, res) => {
  res.render("new-message");
});

router.post("/sign-up", userController.createUser);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.post("/message", userController.createMessage);

module.exports = router;

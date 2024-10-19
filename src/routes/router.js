const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.get("/", async (req, res) => {
  res.render("index");
});
router.get("/sign-up", async (req, res) => {
  res.render("sign-up-form");
});

router.post("/sign-up", userController.createUser);
router.post("/message", userController.createMessage);

module.exports = router;

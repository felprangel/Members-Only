const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.get("/", async (req, res) => {
  res.render("index");
});

router.post("/sign-up", userController.createUser);

module.exports = router;

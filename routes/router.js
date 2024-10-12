const { Router } = require("express");
const db = require("../db/queries");

const router = Router();

router.get("/", async (req, res) => {
  res.render("index");
});

module.exports = router;

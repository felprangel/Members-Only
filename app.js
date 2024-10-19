const express = require("express");
const session = require("express-session");
const path = require("node:path");
const router = require("./src/routes/router");
const passport = require("passport");

const app = express();
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

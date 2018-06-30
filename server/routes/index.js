const express = require("express");
const router = express.Router();
const signup = require("./signup.js");
const login = require("./login.js");

router.get("/api/hello", (req, res) => {
  res.send("Hello world");
});
router.post("/api/signup", signup.post);
router.post("/api/login", login.post);

module.exports = router;

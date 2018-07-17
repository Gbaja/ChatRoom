const express = require("express");
const router = express.Router();
const signup = require("./signup.js");
const login = require("./login.js");
const newGroup = require("./new_group");

router.get("/api/hello", (req, res) => {
  res.send("Hello world");
});
router.post("/api/signup", signup.post);
router.post("/api/login", login.post);
router.post("/api/new_group", newGroup.post);

module.exports = router;

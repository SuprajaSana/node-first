const express = require("express");
const router = express.Router();
router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/login" method="POST"><input id="username" type="text" name="username"><button type="submit" onClick="localStorage.setItem(`username`, document.getElementById(`username`).value)">LOGIN</button></form>'
  );
});
router.post("/login", (req, res, next) => {
  console.log(req.body)
  res.redirect("/");
});

module.exports = router;
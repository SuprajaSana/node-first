const express = require("express");

const data = require("./data");

const fs = require('fs');

const router = express.Router();

router.get("/", (req, res, next) => {
 res.send(
   '<form action="/" method="POST" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)"><input id="message" type="text" name="message"><input id="username" name="username" type="hidden"><button type="submit">SEND</button></form>'
 );
});

router.post('/', (req, res, next) => {
  data.push(`{${req.body.username}:${req.body.message}}`)
  console.log(data)
  res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input id="message" type="text" name="message"><input id="username" name="username" type="hidden"><button type="submit">SEND</button></form>`)
  console.log(`${req.body.username}:${req.body.message}`);
  res.redirect("/")
})

module.exports = router;
const path=require("path")

const express = require("express");

const rootpath=require("../util/path")

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootpath,"views","shop.html"))
});

module.exports = router;
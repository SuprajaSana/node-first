const path = require("path");

const express = require("express");

const rootpath = require("../util/path");

const contactController=require("../controllers/contact")

const router = express.Router();

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "contactus.html"));
});

router.post("/contactus", contactController.contactDetails);

module.exports = router;

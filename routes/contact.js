const path = require("path");

const express = require("express");

const rootpath = require("../util/path");

const contactController=require("../controllers/contact")

const router = express.Router();

router.get("/contactus", contactController.getContactus);

router.post("/contactus", contactController.contactDetails);

module.exports = router;  



/* const path = require("path");
const express = require("express");
const rootpath = require("../util/path");
const router = express.Router();

const products = [];

router.get("/contactus", (req, res, next) => {
  res.render("contact-us", {
    pageTitle: "Contact Us",
    path: "/contactus",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.post("/contactus", (req, res, next) => {
  res.redirect("/success");
});

exports.routes = router;
exports.products = products; */

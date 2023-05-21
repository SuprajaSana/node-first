const path = require("path");

const express = require("express");

const rootpath = require("../util/path");
const Product = require("../models/product");

const router = express.Router();
const shopController=require("../controllers/products")

router.get("/",shopController.getProducts );

module.exports = router;  


/*const path = require("path");
const express = require("express");
const rootpath = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

const shopController=require("../controllers/products")

router.get("/",shopController.getProducts );

module.exports = router; */

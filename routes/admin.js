const path = require("path");

const express = require("express");

const productsController=require("../controllers/products")

const rootpath = require("../util/path");

const router = express.Router();

router.get("/add-product", productsController.getAddProducts);
router.post("/add-product", productsController.postAddProducts);

module.exports = router;  

/*const path = require("path");
const express = require("express");
const rootpath = require("../util/path");
const router = express.Router();

const products = [];

const productsController = require("../controllers/products");

router.get("/add-product",productsController.getAddProducts );

router.post("/add-product",productsController.postAddProducts);

module.exports = router;   */

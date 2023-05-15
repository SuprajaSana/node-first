const path = require("path");

const express = require("express");

const productsController=require("../controllers/products")

const rootpath = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "add-product.html"));
});
router.post("/add-product", productsController.postAddProducts);

module.exports = router;

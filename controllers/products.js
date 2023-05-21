const path = require("path");

const rootpath = require("../util/path");

const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.sendFile(path.join(rootpath, "views", "add-product.html"));
};

exports.postAddProducts = (req, res, next) => {
  /* const product = new Product(req.body.title);
  product.save(); */
  //products.push({title:req.body.title})
  const product = new Product(req.body.title);
  product.save();
  console.log(product);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
  res.sendFile(path.join(rootpath, "views", "shop.html"));
};

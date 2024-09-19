const express = require("express");
const Product = require("../models/ProductModel.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/ProductController.js');


//Get all Products
router.get('/', getProducts);

//Get a Product
router.get("/:id", getProduct);


//Post a Product
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);




module.exports = router;
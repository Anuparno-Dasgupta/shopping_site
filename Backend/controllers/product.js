const express = require("express");
const router = express.Router();

// router.get(/, (req,res) => {
    const productController = require("../controllers/productController")


router.post("/products", productController.createProduct);

module.exports = router;
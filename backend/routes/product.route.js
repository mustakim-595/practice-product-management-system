const express = require('express');
const {
    getAllProducts,
    createProducts,
    deleteProduct,
    getSingleProduct,
    updateProduct
} = require('../controllers/product.controller');
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getSingleProduct);
router.post("/products", createProducts);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
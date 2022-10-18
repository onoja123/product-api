const express = require('express');

const productController = require('./../controller/product')
const router = express.Router();


// router.route("/")
// .get(productController.getProducts)
// .post(productController.createProduct)

router.get("/", productController.getProducts)
router.post("/", productController.createProduct)

// router.route("/:productsId")
// .get(productController.getProductById)
// .patch(productController.updateProductById)
// .delete(productController.deleteProductById)

router.get("/:id", productController.getProductById)
router.patch("/:id", productController.updateProductById)
router.delete("/:id", productController.deleteProductById)



module.exports = router;
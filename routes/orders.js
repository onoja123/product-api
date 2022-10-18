const express = require('express');
const orderController = require("./../controller/orders")
const router = express.Router();

// router.route("/")
// .get(orderController.getOrders)
// .post(orderController.create)

router.get("/", orderController.getOrders)
router.post("/", orderController.postOrder)

// router.route("/:orderId")
// .get(orderController.getOrderById)
// .post(orderController.deleteorderById)

router.get("/:id", orderController.getOrderById)
router.delete("/:id", orderController.deleteOrderById)

module.exports = router;
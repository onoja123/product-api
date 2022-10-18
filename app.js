const express = require("express");

const app = express();



//Routes which should handle requets
const product = require("./routes/products")
const order = require("./routes/orders")

app.use(express.json())

app.use("/products", product)
app.use("/orders", order)

app.get("*", (req, res) =>{
    res.statusCode(404).json({
        error: true,
        message: "Route doesnt exist"
    })
})

module.exports = app;
const express = require("express");

const app = express();



//Routes which should handle requets
const product = require("./routes/products")


app.use(express.json())

app.use("/api/products", product)


// app.get("*", (req, res) =>{
//     res.statusCode(404).json({
//         error: true,
//         message: "Route doesnt exist"
//     })
// })

module.exports = app;
const express = require("express");

const app = express();



//Routes which should handle requets
const product = require("./routes/products")


app.use(express.json())

app.use("/api/products", product)

app.use('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;

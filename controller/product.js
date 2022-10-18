const catchAsync = require('./../utils/catchAsync')
// const AppError = require('./../utils/AppError')
const product = require("./../models/product")

exports.getProducts = catchAsync(async(req, res ,next)=>{
    const products = product.find()
    res.status(201)
    .json({
     status: 'success',
         data: {
            products
        }
    })
})

exports.createProduct = catchAsync(async (req, res, next)=>{
    const newProduct = product.create()
    res.status(201)
    .json({
     status: 'success',
         data: {
            newProduct
        }
    })
})

exports.getProductById = catchAsync(async(req, res, next)=>{
    const found = product.findById(req.params.id)
    res.status(201)
    .json({
     status: 'success',
     result: user.length,
         data: {
            found
        }
    })
})

exports.updateProductById = catchAsync(async(req, res, next)=>{
    const newProduct = product.findByIdAndUpdate(req.params.id, req.body)
    res.status(201)
    .json({
     status: 'success',
         data: {
            newProduct
        }
    })
})

exports.deleteProductById = catchAsync(async(req, res, next)=>{
    const newProduct = product.findByIdAndDelete(req.params.id)
    res.status(201)
    .json({
     status: 'success',
         data: {
            new: null
        }
    })
})
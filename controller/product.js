const catchAsync = require('./../utils/catchAsync')

const product = require("./../models/product")

exports.getProducts = catchAsync(async(req, res ,next)=>{
    const products =  await product.find()
    res.status(201)
    .json({
     status: 'success',
     result: user.length,
         data: {
            products
        }
    })
})

exports.createProduct = catchAsync(async (req, res, next)=>{
    const newProduct = await product.create(req.body)
    res.status(201)
    .json({
     status: 'success',
         data: {
            newProduct
        }
    })
})

exports.getProductById = catchAsync(async(req, res, next)=>{
    const found = await product.findById(req.params.id)
    res.status(201)
    .json({
     status: 'success',
         data: {
            found
        }
    })
})

exports.updateProductById = catchAsync(async(req, res, next)=>{
    const newProduct = await product.findByIdAndUpdate(req.params.id, req.body)
    res.status(201)
    .json({
     status: 'success',
         data: {
            newProduct
        }
    })
})

exports.deleteProductById = catchAsync(async(req, res, next)=>{
    const newProduct = await product.findByIdAndDelete(req.params.id)
    res.status(201)
    .json({
     status: 'success',
         data: {
            new: null
        }
    })
})
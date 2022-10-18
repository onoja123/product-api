const product = require("./../models/product")
const catchAsync = require('./../utils/catchAsync')
// const AppError = require('./../utils/AppError')



exports.getOrders = catchAsync(async (req, res, next) =>{
    const allProducts = await product.find()

        res.status(201)
            .json({
             status: 'success',
             result: user.length,
                 data: {
                    allProducts
                }
        })

})

exports.postOrder = catchAsync(async(req, res, next)=>{
    const newProduct = await product.create(
        req.body
    )
    res.status(201).json({
        status: "sucess",
        data: {
            new: newProduct
        }
    })
})


exports.getOrderById = catchAsync(async (req, res, next)=>{
    const idOrder = await product.findById(req.params.id)
    res.status(201).json({
        status: "sucess",
        data: {
            new: idOrder
        }
    })
})

exports.deleteOrderById = catchAsync(async (req, res, next)=>{
   await product.findByIdAndDelete(req.params.id)
    res.status(201).json({
        status: "deleted",
        data: {
            new: null
        }
    })
})
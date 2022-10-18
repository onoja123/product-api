class AppError extends Error{
    constructor(messsage, statusCode){
        this.statusCode = this.statusCode
        this.status = `${this.statusCode}`.startsWith('4') ? "failed" : "Error"

        this.isOperational = undefined

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError
const http = require("http");
const app = require("./app")
const mongoose = require("mongoose")
const server = http.createServer(app)
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
    'password',
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB, {
    useNewUrlParser: true,
})
.then(()=>{
    console.log("Db connected sucessfully")
})
const PORT = process.env.PORT || 3000

server.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`)
});
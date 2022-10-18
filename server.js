const http = require("http");
const app = require("./app")
const mongoose = require("mongoose")
const server = http.createServer(app)
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
    'password',
    process.env.password
)

mongoose.connect(DB, ()=>{
    useNewUrlParser: true
}).then(()=>{
    console.log("Db connetcted")
})


server.listen(3000, (req, res)=> {
    console.log("server running on port 3000")
});
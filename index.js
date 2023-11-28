import experss from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const app = experss()
app.use(experss.json())

const connectDB = async ()=>{
    const conn =  await mongoose.connect(process.env.BASE_URI)
    if(conn){
        console.log("MongooDB connected Successfuly")
    }
} 
connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`Server is runing on Port : ${PORT}`)
})

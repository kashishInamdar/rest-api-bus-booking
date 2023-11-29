import experss from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Bus from "./model/Bus.js";
dotenv.config();

import { PostApiV1Buses , GetApiV1Buses } from "./controlers/Buses.js";

const app = experss()
app.use(experss.json())

const connectDB = async ()=>{
    const conn =  await mongoose.connect(process.env.BASE_URI)
    if(conn){
        console.log("MongooDB connected Successfuly")
    }
} 
connectDB()

app.get("/api/health" , (req , res)=>{
    res.json({
        success : true ,
        message : "API work ok"
    })
})

app.post("/api/v1/buses" , PostApiV1Buses)

app.get("/api/v1/buses" , GetApiV1Buses)

const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`Server is runing on Port : ${PORT}`)
})

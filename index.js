import experss from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import { PostApiV1Buses , GetApiV1Buses , GetApiV1BusesBYId  , PutApiV1Buses , PatchApiV2Buses ,DeleteApiV3Buses } from "./controlers/Buses.js";
import { PostApiV1Bookings , GetApiV1Bookings , PutApiV1Bookings , PatchApiV2Bookings} from "./controlers/Bookings.js";

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

//  ---------- BUS ----------
app.post("/api/v1/buses" , PostApiV1Buses)
app.get("/api/v1/buses" , GetApiV1Buses)
app.get("/api/v1/buses/:id" , GetApiV1BusesBYId )
app.put("/api/v1/buses/:id" , PutApiV1Buses)
app.patch("/api/v2/buses/:id", PatchApiV2Buses)
app.delete("/api/v3/buses/:id" , DeleteApiV3Buses)
 
// ------------ BOOKING ---------

app.post("/api/v1/bookings" , PostApiV1Bookings)
app.get("/api/v1/bookings", GetApiV1Bookings)
app.put("/api/v1/bookings/:id",PutApiV1Bookings)
app.patch("/api/v2/bookings/:id",PatchApiV2Bookings)



const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`Server is runing on Port : ${PORT}`)
})

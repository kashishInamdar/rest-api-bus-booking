import { Schema, model } from "mongoose";

const BookingSchema = new Schema({
    bus:{
        type:Schema.Types.ObjectId,
        ref:'bus',
        required:true,    
    },
    passangerName:{
        type:String,
        required:true,
        unique:true
    },
    mobileNumber:{
        type:Number,
        required:true,
        unique:true
    },
    seatNumber:{
        type:Number,
        required:true,
        unique:true
    },
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
},
{
    timestamps:true
})

const booking = model('booking',BookingSchema);

export default booking;
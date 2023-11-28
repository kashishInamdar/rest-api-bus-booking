import { Schema , model } from "mongoose";

const busSchema = new Schema({
    busNumber:{
        type : Number,
        require : true,
        unique : true
    },
    capacity : {
        type : Number,
        require : true
    },
    busType:{
        type : String,
        enum : ["AC" , "NonAC" ],
        default : "NonAC"
    } 

},{ timestamps : true})

const Bus = model("Bus" , busSchema);

export default Bus 
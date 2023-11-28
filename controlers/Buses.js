import Bus from "../model/Bus.js"
const PostApiV1Buses = async (req ,res)=>{
    const {busNumber , capacity , busType ,} = req.body 
    
    const bus = new Bus({
         busNumber,
         capacity,
         busType,
    })
 
    res.status(200).json({
     success:true,
     data : bus,
     message : "Add Bus info successfully"
    }) 
 }

export {PostApiV1Buses}
import Bus from "../model/Bus.js"
const PostApiV1Buses = async (req ,res)=>{
    const {busNumber , totalSeats , busType ,} = req.body 
    
    const bus = new Bus({
         busNumber,
         totalSeats,
         busType,
    })

    try{
        const buses = await bus.save()
 
        res.status(201).json({
         success:true,
         data : buses,
         message : "Add Bus info successfully"
        }) 

    }
    catch(err){
        res.status(400).json({
            success : false,
            message : err.message
        })
    }
 }


 const GetApiV1Buses =  async (req , res) =>{
    try{
        const Buses = await Bus.find()
        
        res.status(200).json({
            success : true ,
            date : Buses ,
            message : "Successfully get all Buses"
        })
    }
   catch(err){
    res.status(400).json({
        success : false ,
        message : err.message
    })
   }
}




const GetApiV1BusesBYId = async (req,res)=>{
    const {id} = req.params;

    const finddata = await Bus.findOne({_id:id});
    res.status(200).json({
        success:true,
        data:finddata,
        message:"successfully fetch one bus"
    })
} 



export {PostApiV1Buses , GetApiV1Buses , GetApiV1BusesBYId }
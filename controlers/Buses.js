import Bus from "../model/Bus.js"
const PostApiV1Buses = async (req ,res)=>{
    const {busNumber , capacity , busType ,} = req.body 
    
    const bus = new Bus({
         busNumber,
         capacity,
         busType,
    })

    try{
        const buses = await bus.save()
 
        res.status(201).json({
         success:true,
         data : bus,
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

export {PostApiV1Buses , GetApiV1Buses}
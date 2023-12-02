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

const PutApiV1Buses = async(req,res)=>{
    const { _id } = req.params;

   const { busNumber, totalSeats, busType } = req.body;

   await Bus.updateOne({_id:_id}, {$set:{ busNumber, totalSeats, busType }})

   const updateBus = await Bus.findById(_id);

   return res.status(200).json({
    success:true,
    message:"successfully update"
   })
}
const PatchApiV2Buses = async (req,res)=>{
    try{
      const {id} = req.params;  
      const {busNumber} = req.body;
      await Bus.updateOne({_id:id}, {$set:{busNumber:busNumber}});
  
      res.status(200).json({
          success:true,
          message:"successfully update"
      })
    }
    catch(err){
      return res.json({
          success:false,
          message:err.message
      })
    }
  }
  
  const DeleteApiV3Buses = async (req,res)=>{
      const {id} = req.params;
  
      const deleteBus = await Bus.deleteOne({_id:id});
  
      res.json({
          success:true,
          data:deleteBus,
          message:"successfully deleted bus"
      })
  }



export {PostApiV1Buses , GetApiV1Buses , GetApiV1BusesBYId , PutApiV1Buses  , PatchApiV2Buses ,DeleteApiV3Buses }
import Booking from "../model/Booking.js";

const PostApiV1Bookings = async (req,res)=>{
    try{
    const {bus,  mobileNumber, passangerName, seatNumber, to, from} = req.body;

    const booking = new Booking({
        bus, 
        passangerName,
        seatNumber, 
        mobileNumber,
        to, 
        from
    })
    const savedBooking = await booking.save();
    res.json({
        success:true,
        data:savedBooking,
        message:'successfully saved'
    })
   }
   catch(err){
    res.json({
        success:false,
        message:err.message
    })
   }
    
}

const GetApiV1Bookings = async (req,res)=>{
    const booking = await Booking.find();

    res.json({
        success:true,
        data:booking,
        message:'successfully fetch booking'
    })
}

const PutApiV1Bookings  = async (req,res)=>{
    const {id} = req.params;

    const {bus, passangerName, mobileNumber, seatNumber, to, from} = req.body;

    await Booking.updateOne({_id:id}, {$set:{bus, passangerName, mobileNumber, seatNumber, to, from}});

    res.json({
        success:true,
        message:"successfully update booking"
    })
}

const PatchApiV2Bookings = async (req,res)=>{
    const {id} = req.params;

    const { to, from} = req.body;

    await Booking.updateOne({_id:id}, {$set: {to:to,from:from}})

    res.json({
        success:true,
        message:"successfully update"
    })

}



export {PostApiV1Bookings , GetApiV1Bookings  , PutApiV1Bookings , PatchApiV2Bookings}
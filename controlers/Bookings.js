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

const putApiBooking = async (req,res)=>{
    const {id} = req.params;

    const {bus, passangerName, mobileNumber, seatNumber, to, from} = req.body;

    await Booking.updateOne({_id:id}, {$set:{bus, passangerName, mobileNumber, seatNumber, to, from}});

    res.json({
        success:true,
        message:"successfully update booking"
    })
}

const patchApiBooking = async (req,res)=>{
    const {id} = req.params;

    const { to, from} = req.body;

    await Booking.updateOne({_id:id}, {$set: {to:to,from:from}})

    res.json({
        success:true,
        message:"successfully update"
    })

}

const deleteApiBooking = async (req,res)=>{
   try{
    const {id} = req.params;

    const deleteBooking = await Booking.deleteOne({_id:id});
    res.json({
        success:true,
        data:deleteBooking,
        message:"successfully delete"
    })
   }
   catch(err){
    res.json({
        success:false,
        message:err.message
    })
   }
}

export {PostApiV1Bookings , GetApiV1Bookings }
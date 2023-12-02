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
export {PostApiV1Bookings}
// controller for ride-
const rideModel = require('./Backend/services/ride.service')
const crypto = require('crypto')
const {validationResult} = require('express-validation')
module.exports.creatRide = async (req,res) =>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()})
    }
    const { user, pickup, destination, vehicleType} = req.body;
    try {
        const ride = await rideModel.createRide({
            user: req.user._id,
            pickup,
            destination,
            vehicleType,
        })
        return res.status(200).json(ride)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// ride services- 
// get otp-
function getOtp(num){
   function genrateotp(num){
        const otp = crypto.randomInt(Math.pow (10, num -1), Math.pow(10, num)).toString();
        return otp;
    }
    return genrateotp(num);
}
//create ride-

module.exports.createRide = async({
    user,
    pickup,
    destination,
    vehicleType
}) =>{
    if(!user || !pickup || !destination || vehicleType){
        throw new Error('All fields are required')
    }
    const fare = await getfare(pickup, destination)
    const ride = await rideModel.createRide({
        user,
        pickup,
        destination,
        fare: fare[vehicleType],
        otp: getOtp(6) 
    })
    return ride;
}
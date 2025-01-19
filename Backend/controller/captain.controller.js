const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blacklistuser = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname, email, password, vehicle} = req.body;

    const hashedPassword = await captainModel.hashPassword(password)
    
    
    const captainExists = await captainModel.findOne({email});
    if(captainExists){
        return res.status(400).json({message: 'captain already exists'})
    }

    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      vehicleType: vehicle.vehicleType,
      capacity: vehicle.capacity,
    });

    const token = captain.genAuthToken();
    res.status(201).json({captain, token})
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;
    
    const captain = await captainModel.findOne({email}).select('+password');
    if(!captain){
        res.status(401).json({message: "Invaild email or password"})
    }

    const isMatched = await captain.camparePassword(password)
    if(!isMatched){
        res.status(401).json({message: "Invaild email or password"})
    }

    const token = captain.genAuthToken();
    res.cookie('token', token)
    res.status(200).json({captain, token})
}

module.exports.logoutCaptain=  async (req, res, next) => {
   
    res.clearCookie("token")
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        await blacklistuser.create({ token });
        res.status(200).json({ message: "Captain logged out" })
}

module.exports.captainProfile = async (req, res, next) => {
    res.status(200).json({captain: req.captain})
}
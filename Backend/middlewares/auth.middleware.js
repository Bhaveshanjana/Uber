const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Unauthorized user'})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token:token });
    if(isBlacklisted){
        return res.status(401).json({message: 'unauthorized user'})
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decode._id);

        req.user = user;

        return next();
        
    } catch (error) {
        return res.status(400).json({message: "Unauthorized user"})
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
         return res.status(401).json({message: 'Unauthorized captain'})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token:token });
    if(isBlacklisted){
        return res.status(401).json({message: 'unauthorized captain'})
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decode._id);

        req.captain = captain;

        return next();
        
    } catch (error) {
         res.status(400).json({message: "Unauthorized captain"})
    }
}



const captainModel = require('../models/captain.model')

module.exports.createCaptain = async({
    firstname,
    lastname,
    color,
    vehicleType,
    plate,
    capacity,
    email,
    password,
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required')
    }
    const captain = await captainModel.create({

        fullname: {
            firstname,
            lastname
        },
        vehicle:{
            color,
            vehicleType,
            plate,
            capacity,
        },
        email,
        password,
    })
    return captain
}
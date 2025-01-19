const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'firstname must be at least 8 characters long']
        },
        lastname:{
            type: String,
        }
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minlength: [5, 'Password must be at least 8 characters long'],
        select: false,
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, 'Vehicle color must be at least 3 characters long']
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'Vehicle plate must be at least 3 characters long']
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['bike', 'car', 'auto']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Vehicle capacity must be at least 1 passenger']
        }
    },
    status:{
        type: String,
        enum:['active', 'inactive'],
        default: 'inactive'
    }, 
    soketid:{
        type: String,
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    }
})

captainSchema.methods.genAuthToken =  function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.statics.hashPassword = async function(password){
    return user = await bcrypt.hash(password, 10)
}

captainSchema.methods.camparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;
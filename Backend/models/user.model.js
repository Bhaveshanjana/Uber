const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'fullname must be at least 5 characters']
        },
        lastname: {
            type: String,
            required: true,
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    }
})

//Generating token
userSchema.methods.genAuthToken = function(){
    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET,{expiresIn: '24h'})
    return token;
}

//camparing password
userSchema.methods.camparePassword =  async function(password){
    return await bcrypt.compare(password, this.password)
}

//hashing pasword 
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
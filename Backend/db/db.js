const mongoose = require('mongoose');
const dotenv = require('dotenv');

function connectToDb (){
    mongoose.connect(process.env.MONGO_URL).then(() =>{console.log('Connected to DB')}).catch(err =>console.log(err)
)};

module.exports = connectToDb;
//this file use for creating user
const userModel = require("../models/user.model");

module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password,
}) => {
    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ Message: "please provide all filds" });
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });
    return user;
};




//this file register user, generate token and hasing password

const userModel = require("../models/user.model");
const { validationResult } = require("express-validator");
const userService = require("../services/user.service");
const blacklistUser = require('../models/blacklistToken.model')

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password } = req.body;

    const userExists = await userModel.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
    });
    const token = user.genAuthToken();
    res.status(201).json({ user, token });
};


module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ message: "Invaild email or password" })
    }

    const isMatch = await user.camparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Inavlid email or password" })
    }

    const token = user.genAuthToken();

    res.cookie('token', token)

    res.json({ user, token });
};

module.exports.getUserProfile = async (req, res, next) => {
    res.json(req.user);
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistUser.create({ token });
    res.status(200).json({ message: "User logged out" })
}


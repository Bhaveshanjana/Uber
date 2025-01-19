const express = require('express')
const {body} = require('express-validator')
const captainController = require('../controller/captain.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router();

router.post('/register', [
    body('fullname.firstname').isLength( {min: 3}).withMessage('firstname must be 3 characters long'),
    body('email').isEmail().withMessage('Invaild email'),
    body('password').isLength({min : 5}).withMessage('Invaild password'),
    body('vehicle.color').isLength({min:3}).withMessage('color must be 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('vehicle plate must be 3 characters long'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('invalid vehicle type'),
], 
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invaild email'),
    body('password').isLength({min : 5}).withMessage('Invaild password'),
],
    captainController.loginCaptain
)

router.get('/logout',
    authMiddleware.authCaptain ,
    captainController.logoutCaptain
)

router.get('/profile',
    authMiddleware.authCaptain,
    captainController.captainProfile
)

module.exports = router;
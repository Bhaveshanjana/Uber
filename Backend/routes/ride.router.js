const express = require("express");
const router = express.Router();
const { body, query } = require("express-validator");
const rideController = require("../controller/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/create",
  authMiddleware.authUser,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invaild pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invaild destination address"),
  body("vehicleType")
    .isIn(["auto", "car", "bike"])
    .isString()
    .withMessage("Invaild vehicle type"),
  rideController.createRide
);

router.get(
  "/get-fare",
  authMiddleware.authUser,
  query("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invaild pickup address"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invaild destination address"),
  rideController.getFare
);

router.post(
  "/confirm",
  authMiddleware.authCaptain,
  body("rideId").isMongoId().withMessage("Invaild ride Id"),
  rideController.confirmRide
);

router.get(
  "/start-ride",
  // authMiddleware.authCaptain,
  query("rideId").isMongoId().withMessage("Invaild ride Id"),
  query("otp")
    .isString()
    .isLength({ min: 4, max: 4 })
    .withMessage("Invaild otp"),
  rideController.startRide
);
module.exports = router;

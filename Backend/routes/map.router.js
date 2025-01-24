const express = require("express");
const router = express.Router();
const authmiddleware = require("../middlewares/auth.middleware");
const mapController = require("../controller/map.controller");
const { query } = require("express-validator");

router.get(
  "/get-cordinates",
  query("address").isString().isLength({ min: 3 }),
  authmiddleware.authUser,
  mapController.getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({min: 3}),
    query('destination').isString().isLength({min:3}),
    authmiddleware.authUser,
    mapController.getDistanceTime
)
module.exports = router;

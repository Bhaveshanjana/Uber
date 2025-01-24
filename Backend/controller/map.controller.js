const mapService = require("../services/maps.service");
const { validationResult } = require('express-validator')

module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        res.status(404).json({ message: "Coordinates not found" });
    }
};

module.exports.getDistanceTime = async (req, res, next) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        const { origin, destination } = req.query;

        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);

    } catch (error) {
        console.log(error);
        throw error;

    }
}

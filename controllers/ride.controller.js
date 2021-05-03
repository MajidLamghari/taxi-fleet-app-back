var rideService = require('../services/ride.services')
exports.getRides = async function (req, res, next) {
    try {
        var rides = await rideService.getRides();
        const ridesWithPrice = rides.map(ride => ({
            ...ride, price: rideService.calculatePrice(ride.startTime, ride.duration, ride.distance)
        }))
        return res.status(200).json({ status: 200, rides: ridesWithPrice, message: "Succesfully Drives Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.calclulatePrice = async function (req, res, next) {
    try {
        var startTime = req.query.starttime;
        var miles = req.query.miles;
        var duration = req.query.duration;

        var price = rideService.calculatePrice(startTime, duration, miles);

        return res.status(200).json({ status: 200, price: price, message: "Succesfully Price Calculated" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
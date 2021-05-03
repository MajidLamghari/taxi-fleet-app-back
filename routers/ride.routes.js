var express = require('express');
var router = express.Router();

var RideController = require('../controllers/ride.controller')

router.get('/', RideController.getRides)
router.get('/calculate', RideController.calclulatePrice)

module.exports = router;
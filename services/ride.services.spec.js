var moment = require('moment')
var rideService = require('./ride.services')

describe('Testing price calculator function', () => {
    it('should equal 6', () => {
        const startTime = '2020-06-19T13:01:17.031Z';
        expect(rideService.calculatePrice(startTime, 3000, 2)).toBe(6);
    })

    it('should equal 6', () => {
        const startTime = '2020-06-19T14:11:17.031Z';
        expect(rideService.calculatePrice(startTime, 4000, 5)).toBe(13.5);
    })
});


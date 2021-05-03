var moment = require('moment')
var priceCalculator = require('./ride.services')

describe('Testing price calculator function', () => {

    //calculatePrice(moment(),12000, 3)

    it('should equal 6', () => {
        const startTime = '2020-06-19T13:01:17.031Z';
        expect(priceCalculator(startTime, 3000, 2)).toBe(6);
    })
});
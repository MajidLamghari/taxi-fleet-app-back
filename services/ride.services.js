var data = require("../data/data.json")
var moment = require('moment')

exports.getRides = async function () {
    try {
        var rides = await data;
        return rides;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating drives')
    }
}

const nightAdditionStart = date => moment(date).set('hours', 20).set('minute', 0).set('seconds', 0).set('milliseconds', 0)
const nightAdditionEnd = date => moment(date).set('hours', 6).set('minute', 0).set('seconds', 0).set('milliseconds', 0)

const busyAdditionStart = date => moment(date).set('hours', 16).set('minute', 0).set('seconds', 0).set('milliseconds', 0)
const busyAdditionEnd = date => moment(date).set('hours', 19).set('minute', 0).set('seconds', 0).set('milliseconds', 0)


const isNight = (startTime, endTime) => {
    return moment(startTime).isBetween(nightAdditionStart(startTime), nightAdditionEnd(endTime))
        && moment(endTime).isBetween(nightAdditionStart(startTime), nightAdditionEnd(endTime))
};

const isBusyHours = (startTime, endTime) => {
    return moment(startTime).isBetween(busyAdditionStart(startTime), busyAdditionEnd(endTime))
        && moment(endTime).isBetween(busyAdditionStart(startTime), busyAdditionEnd(endTime))
};

exports.calculatePrice = (startTime, duration, miles) => {
    try {

        const intialCharge = 1;
        const chargePerMile = 2.5;
        const nightAddition = 0.5;
        const busyHoursAddition = 1;

        const endTime = moment(startTime).add(duration, 'seconds')

        let price = intialCharge + chargePerMile * miles;
        
        if (isNight(startTime, endTime)) {
            price += nightAddition;
        }

        if (isBusyHours(startTime, endTime)) {
            price += busyHoursAddition;
        }

        return price;

    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating drives')
    }
}
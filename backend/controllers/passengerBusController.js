const PassengerBus = require('../models/passengerBusModel');

const asyncHandler = require('express-async-handler')
class PassengerBusController {

    //  [ GET - ROUTE: api/passengerBus ]
    getAllPBus = asyncHandler(async(req, res) => {

    })

    //  [ POST - ROUTE: api/passengerBus ]
    addPBus = asyncHandler(async(req, res) => {

    })

}
module.exports = new PassengerBusController;
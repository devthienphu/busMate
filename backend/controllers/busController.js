const Bus = require('../models/busModel');

const asyncHandler = require('express-async-handler')
class BusController {
    //  [ GET - ROUTE: api/bus ]
    getListOfBuses = asyncHandler(async(req, res) => {

    })

    //  [ GET - ROUTE: api/bus/id] - number of bus
    getBusByNumber = asyncHandler(async(req, res) => {

    })


}
module.exports = new BusController;
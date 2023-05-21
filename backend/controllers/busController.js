const Bus = require('../models/busModel');

const asyncHandler = require('express-async-handler')
class BusController {
    //  [ GET - ROUTE: api/bus?keyword ]
    getListOfBuses = asyncHandler(async(req, res) => {
        const key = req.query.keyword
        if (key) {
            const buses = await Bus.find({
                $or: [
                    { name: { $regex: key, $options: 'i' } },
                    { eStation: { $regex: key, $options: 'i' } },
                    { sStation: { $regex: key, $options: 'i' } },
                ]
            })
            res.json(buses)
        } else {
            const buses = await Bus.find({})
            res.json(buses)
        }
    })

    //  [ GET - ROUTE: api/bus/:id] - number of bus
    getBusByNumber = asyncHandler(async(req, res) => {
        const number = req.params.id;
        const bus = await Bus.findOne({ number })
        if (bus) {
            res.json(bus);
        } else {
            res.status(404).send('Bus not found');
        }
    })




}
module.exports = new BusController;
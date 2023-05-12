const PassengerBus = require('../models/passengerBusModel');

const asyncHandler = require('express-async-handler')
class PassengerBusController {

    //  [ GET - ROUTE: api/passengerBus?keyword]
    getAllPBus = asyncHandler(async(req, res) => {
        const key = req.query.keyword;
        if (key) {
            const pBus = await PassengerBus.find({ name: { $regex: key, $options: 'i' } })
            res.json(pBus)
        } else {
            const pBus = await PassengerBus.find({})
            res.json(pBus)
        }
    })


    //  [ POST - ROUTE: api/passengerBus ]
    addPBus = asyncHandler(async(req, res) => {
        const { name, startPoint, destination, ticketPrice, departTime, capacity } = req.body
        var newPBus = await PassengerBus.create({
            name,
            startPoint,
            destination,
            ticketPrice,
            departTime,
            capacity,
            available: capacity
        })
        if (newPBus) {
            await newPBus.save()
            res.json(newPBus)
        } else {
            res.status(404);
            throw new Error("Invalid data");
        }
    })

}
module.exports = new PassengerBusController;
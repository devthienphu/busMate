const Ticket = require('../models/ticketModel');
const PassengerBus = require('../models/passengerBusModel');
const asyncHandler = require('express-async-handler')
class TicketController {
    //  [ POST - ROUTE: api/ticket/:id] - id of PBus
    buyTicket = asyncHandler(async(req, res) => {
        const user = req.user._id;
        const pBus = await PassengerBus.findById(req.params.id);
        if (!pBus){
            res.status(404);
            throw new Error("Cannot find passenger bus");            
        }
        if (pBus.available == 0) {
            res.status(400);
            throw new Error("Sold out ticket!");
        } else {
            pBus.available -= 1;
            await pBus.save();
            var newTicket = await Ticket.create({
                user,
                passengerBus: pBus.id
            })
            if (newTicket) {
                await newTicket.save()
                res.json(newTicket)
            } else {
                res.status(404);
                throw new Error("Invalid data");
            }
        }
    })

    //  [ GET - ROUTE: api/ticket]
    getTicket = asyncHandler(async(req, res) => {
        const user = req.user._id;
        const tickets = await Ticket.find({ user }).populate('passengerBus');

        if (!tickets) {
            res.status(404);
            throw new Error("No tickets found!");
        }

        res.json(tickets);
    })

    //  [ PATCH - ROUTE: api/ticket/:id] - id of Ticket
    updateStateTicket = asyncHandler(async(req, res) => {
        const ticket = await Ticket.findById(req.params.id);
        if (ticket) {
            var newTicket = await Ticket.findOneAndUpdate({ _id: req.params.id }, {
                state: req.body.state || ticket.state
            }, {
                new: true
            });
            res.json(newTicket)
        } else {
            res.status(404)
            throw new Error('Ticket does not exist!')
        }

    })
}
module.exports = new TicketController;
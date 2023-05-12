const Ticket = require('../models/ticketModel');

const asyncHandler = require('express-async-handler')
class TicketController {
    //  [ POST - ROUTE: api/ticket/:id] - id of PBus
    buyTicket = asyncHandler(async(req, res) => {

        })
        //  [ GET - ROUTE: api/ticket]
    getTicket = asyncHandler(async(req, res) => {

    })

    //  [ PATCH - ROUTE: api/ticket/:id] - id of Ticket
    updateStateTicket = asyncHandler(async(req, res) => {

    })
}
module.exports = new TicketController;
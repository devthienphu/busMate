const userRouter = require('./userRoutes');
const busRouter = require('./busRoutes');
const feedbackRouter = require('./feedbackRoutes');
const passengerBusRouter = require('./passengerBusRoutes');
const reportRouter = require('./reportRoutes');
const ticketRouter = require('./ticketRoutes');

function routes(app) {
    app.use('/api/user', userRouter);
    app.use('/api/bus', busRouter);
    app.use('/api/feedback', feedbackRouter);
    app.use('/api/passengerBus', passengerBusRouter);
    app.use('/api/report', reportRouter);
    app.use('/api/ticket', ticketRouter);
}

module.exports = routes;
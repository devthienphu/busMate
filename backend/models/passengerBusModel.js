var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passengerBusModel = new Schema({
    name: {
        type: String,
        require: true
    },
    startPoint: {
        type: String,
        require: true
    },
    destination: {
        type: String,
        require: true
    },
    ticketPrice: {
        type: Number,
        require: true
    },
    departTime: {
        type: String,
        require: true
    },
    capacity: {
        type: Number,
        require: true
    },
    available: {
        type: Number,
        require: true
    }
})
module.exports = mongoose.model('PassengerBus', passengerBusModel);
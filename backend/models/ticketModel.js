var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ticketModel = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    passengerBus: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'PassengerBus'
    },
    state: {
        type: String,
        require: true,
        default: 'Pending'
    },

})
module.exports = mongoose.model('Ticket', ticketModel);
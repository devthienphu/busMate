const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busModel = new Schema({
    name: {
        type: String,
        require: true,
    },
    number: {
        type: Number,
        require: true
    },
    sStation: {
        type: String,
        require: true
    },
    eStation: {
        type: String,
        require: true
    },
    distance: {
        type: Number,
        require: true
    },
    dailyTrip: {
        type: Number,
        require: true
    },
    sTime: {
        type: String,
        require: true
    },
    eTime: {
        type: String,
        require: true
    },
    unitPrice: {
        type: Number,
        require: true
    },
    monthlyPrice: {
        type: Number,
        require: true
    },
    stoppingStation1: [{
        nameStation: {
            type: String,
            required: true
        },
        afterDepartTime: {
            type: Number,
            required: true
        },
        default: []
    }],
    stoppingStation2: [{
        nameStation: {
            type: String,
            required: true
        },
        afterDepartTime: {
            type: Number,
            required: true
        },
        default: []
    }],
    rating: [{
        score: {
            type: Number,
            required: true
        },
        feedback: {
            type: String,
            required: true,
            default: ""
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        default: []
    }],
})

module.exports = mongoose.model('Bus', busModel);
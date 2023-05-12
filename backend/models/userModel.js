const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userModel = new Schema({
    userName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    contact: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    favoriteBus: [{
            bus: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Bus"
            }
        },
        {
            default: []
        }
    ],
    roleUser: {
        type: String,
        require: true
    }
})

userModel.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userModel);
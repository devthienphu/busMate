var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var feedbackModel = new Schema({
    content: {
        type: String,
        require: true
    },
    timestamps: {
        createdAt: true,
        updatedAt: false
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})
module.exports = mongoose.model('Feedback', feedbackModel);
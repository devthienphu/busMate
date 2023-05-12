const Feedback = require('../models/feedbackModel');

const asyncHandler = require('express-async-handler')
class FeedbackController {
    //  [ POST - ROUTE: api/feedback]
    sendFeedback = asyncHandler(async(req, res) => {

    })
}
module.exports = new FeedbackController;
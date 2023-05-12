const Feedback = require('../models/feedbackModel');

const asyncHandler = require('express-async-handler')
class FeedbackController {
    //  [ POST - ROUTE: api/feedback]
    sendFeedback = asyncHandler(async(req, res) => {
        const user = req.user._id;
        const { content } = req.body
        var newFeedback = await Feedback.create({
            content,
            user
        })
        if (newFeedback) {
            await newFeedback.save()
            res.json(newFeedback)
        } else {
            res.status(400);
            throw new Error("Invalid data");
        }
    })
}
module.exports = new FeedbackController;
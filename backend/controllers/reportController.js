const Report = require('../models/reportModel');

const asyncHandler = require('express-async-handler')
class ReportController {
    //  [ POST - ROUTE: api/report]
    sendReport = asyncHandler(async(req, res) => {
        const user = req.user._id;
        const { content } = req.body
        var newReport = await Report.create({
            content,
            user
        })
        if (newReport) {
            await newReport.save()
            res.json(newReport)
        } else {
            res.status(404);
            throw new Error("Invalid data");
        }
    })
}
module.exports = new ReportController;
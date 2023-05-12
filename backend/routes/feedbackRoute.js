const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.post('/', authMiddlewares.protect, feedbackController.sendFeedback);

module.exports = router;
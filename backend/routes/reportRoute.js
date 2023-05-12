const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.post('/', authMiddlewares.protect, reportController.sendReport);

module.exports = router;
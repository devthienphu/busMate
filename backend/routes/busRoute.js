const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');
const authMiddlewares = require('../middlewares/authMiddlewares');


router.get('/', authMiddlewares.protect, busController.getListOfBuses);
router.get('/id', authMiddlewares.protect, busController.getBusByNumber);

module.exports = router;
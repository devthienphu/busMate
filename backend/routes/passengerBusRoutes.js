const express = require('express');
const router = express.Router();
const passengerBusController = require('../controllers/passengerBusController');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.post('/', authMiddlewares.protect, authMiddlewares.isAdmin, passengerBusController.addPBus);
router.get('/', passengerBusController.getAllPBus);


module.exports = router;
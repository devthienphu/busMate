const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.post('/:id', authMiddlewares.protect, ticketController.buyTicket);
router.get('/', authMiddlewares.protect, ticketController.getTicket);
router.patch('/:id', authMiddlewares.protect, authMiddlewares.isAdmin, ticketController.updateStateTicket);
module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddlewares = require('../middlewares/authMiddlewares');

router.post('/register', userController.registerUser);
router.post('/auth', userController.authUser);
router.post('/feedback/:id', authMiddlewares.protect, userController.sendRating);

router.get('/', authMiddlewares.protect, userController.getUserProfile)
    .get('/favorite', authMiddlewares.protect, userController.getFavoriteBuses)
    .patch('/favorite/:id', authMiddlewares.protect, userController.addFavoriteBus)
    .patch('/', authMiddlewares.protect, userController.updateUser)



module.exports = router;
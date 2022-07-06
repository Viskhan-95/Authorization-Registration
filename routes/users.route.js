const { usersController } = require('../controllers/users.controller');
const { Router } = require('express');

const router = Router();

router.get('/users/fetch', usersController.getAllUsers);
router.post('/login', usersController.login);
router.post('/users/add', usersController.registerUser);

module.exports = router;
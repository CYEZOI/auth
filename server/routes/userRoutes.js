const express = require('express');
const router = express.Router();

// 引入用户控制器
const userController = require('../controllers/userController');

// 定义路由
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

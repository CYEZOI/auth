const User = require('../models/User'); // 引入用户模型
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 注册用户
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        // 检查用户是否已存在
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // 密码加密
        const hashedPassword = await bcrypt.hash(password, 10);

        // 创建新用户
        const user = await User.create({ username, password: hashedPassword });

        res.status(201).json({ message: 'User registered', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// 用户登录
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // 查找用户
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // 验证密码
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // 生成 JWT
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// 获取用户信息
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// 更新用户信息
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password } = req.body;

        // 查找用户
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // 更新用户信息
        if (username) user.username = username;
        if (password) user.password = await bcrypt.hash(password, 10);

        await user.save();

        res.status(200).json({ message: 'User updated', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// 删除用户
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        // 查找用户
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // 删除用户
        await user.destroy();

        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

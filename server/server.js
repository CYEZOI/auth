const app = require('./app');
const User = require('./models/User'); // 引入用户模型

// 同步数据库
User.sync().then(() => {
    console.log('Database synchronized');
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('../config');
// const { loginSchema } = require('../schema/login');
// const valid = require('../middleware/valid');
const db = require('../db');


const handleLogin = (req, res) => {
    // 判断用户是否存在
    const sql = `SELECT * FROM users WHERE name="${req.body.username}"`;
    db(sql, result => {
        if (result.length !== 1) {
            return res.send({
                status: 1,
                msg: '登录失败，用户不存在'
            });
        }
        // 存在则对比密码
        const compareRes = bcrypt.compareSync(req.body.password,result[0].password);
        if(!compareRes){
            return res.send({
                status:1,
                msg:'登录失败，密码错误'
            });
        }
        //根据用户信息生成token,到期时间为1小时
        const token = jwt.sign({ username: req.body.username,UID:result[0].id }, config.privateKey,{expiresIn: '1h'});
        res.send({
            status:0,
            msg:'登录成功',
            token
        });

    });

};
router.post('/', handleLogin);
module.exports = router;
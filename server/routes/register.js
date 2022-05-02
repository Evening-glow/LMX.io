const express = require('express');
const router = express.Router();//返回一个路由对象
const bcrypt = require('bcryptjs');
const valid = require('../middleware/valid');
const { registerSchema } = require('../schema/register');
const db = require('../db');


router.post('/', valid(registerSchema), (req, res) => {

    const sql = `SELECT * FROM users WHERE name = "${req.body.username}"`;
    db(sql,result => {
        //判断用户名是否已存在,存在返回错误
        if (result.length >= 1) {
            return res.send({
                status: 1,
                msg: '注册失败，用户名已存在'
            });
        }
        // 密码加密
        req.body.password = bcrypt.hashSync(req.body.password,10);
        const sql = `INSERT INTO users (name,password,email) VALUES ("${req.body.username}","${req.body.password}","${req.body.email}")`;
        db(sql, result => {
            // 如果数据添加成功则返回注册成功
            if (result.affectedRows === 1) {
                return res.send({
                    status: 0,
                    msg: '注册成功'
                });
            }
            res.send({
                status:1,
                msg:'数据库错误，注册失败'
            });
        });
    })
});

module.exports = router;
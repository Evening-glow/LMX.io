const express = require('express');
const router = express.Router();
const db = require('../db');
const url = require('url');

router.get('/', (req, res) => {
    var urlObj = url.parse(req.url, true).query;//获取url参数部分，返回的是一个对象，每个参数都是一个属性
    const { uid } = urlObj;
    const sql = `SELECT t1.name,t1.id uid,t1.email,t1.gender,t2.title,t2.dateline,t2.id FROM users t1,userarticles t2 WHERE t2.uid=${uid} AND t1.id=${uid}`;
    db(sql, result => {
        if (result.length > 0) {
            let userInfo = { name: result[0].name, id: result[0].uid, email: result[0].email, gender: result[0].gender };
            let articles = [];
            result.map(i => {
                articles.push({ id: i.id, title: i.title, dateline: i.dateline });
            });
            return res.send({
                status: 0,
                msg: '请求成功',
                userInfo,
                articles
            });
        } else {
            let query = `SELECT * FROM users WHERE id=${uid}`;
            db(query, resultUserinfo => {
                if (resultUserinfo.length > 0) {
                    return res.send({
                        status: 0,
                        msg: '请求成功',
                        userInfo: resultUserinfo[0],
                        articles: []
                    });
                } else {
                    return res.send({
                        status: 1,
                        msg: '请求失败',
                    });
                }
            });
        }
    });
});
module.exports = router;
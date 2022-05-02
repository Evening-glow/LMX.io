const express = require('express');
const router = express.Router();
const db = require('../db');

//获取用户文章
const handleGetArticles = (req,res)=>{
    //返回所有用户文章
    const sql = "SELECT * FROM userarticles";
    db(sql,result=>{
        if (result.length  === 0) {
            return res.send({
                status: 2,
                msg: '信息不存在'
            });
        }
        //存在则返回
        res.send({
            status:0,
            msg:'获取成功',
            data:result
        });
    });
}
router.get('/',handleGetArticles);
module.exports = router;
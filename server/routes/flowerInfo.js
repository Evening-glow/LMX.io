const express = require('express');
const router = express.Router();
const db = require('../db');

const handleGetInfo = (req,res)=>{
    const sql = "SELECT * FROM flower_info";
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
router.get('/',handleGetInfo);
module.exports = router;
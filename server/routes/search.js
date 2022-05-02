const express = require('express');
const router = express.Router();
//获取url中的参数
const url = require('url');
const db = require('../db');

const handleSearch = (req,res)=>{
    //获取请求头对应的id
    // 设置为ture后，将字符串格式转换为对象格式
    var urlObj = url.parse(req.url,true).query;//获取url参数部分，返回的是一个对象，每个参数都是一个属性
    const {id,table_name} = urlObj;
    // 通过select获取数据库中对应id
    const sql = `SELECT * FROM ${table_name} WHERE id="${id}"`;
    db(sql,result=>{
        if(!result.length){
            return res.send({
                status:2,
                msg:'获取失败，内容不存在'
            });
        }
        res.send({
            status:0,
            msg:'内容获取成功',
            data:result
        });
    });
};
router.get('/',handleSearch);
module.exports = router;
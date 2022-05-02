const express = require('express');
const router = express.Router();
const db = require('../db');
const url = require('url');
//获取对应文章的评论
const handleGetComments = (req,res)=>{
    var urlObj = url.parse(req.url,true).query;
    const {articleID} = urlObj;
    const sql = `SELECT * FROM comments WHERE articleID="${articleID}"`;
    db(sql,result=>{
        if(!result.length){
            return res.send({
                status:1,
                msg:'内容不存在'
            });
        }
        res.send({
            status:0,
            msg:'内容获取成功',
            data:result
        });
    });
};
router.get('/',handleGetComments);
module.exports = router;
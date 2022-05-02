const express = require('express');
const router = express.Router();
const db = require('../db');

const handleRelease = (req, res) => {
    const auth = req.body.user;
    const uid = req.body.userID;
    const title = req.body.title;
    const content = req.body.markString;
    const time = req.body.time;
    
    const sql = `INSERT INTO userarticles (author,title,dateline,content,uid) VALUES ("${auth}","${title}","${time}","${content}",${uid});`;
    db(sql,result=>{
        if (result.affectedRows === 1) {
            return res.send({
                status: 0,
                msg: '发布成功'
            });
        }
        res.send({
            status: 1,
            msg: '数据库错误，发布失败'
        });
    });
}
router.post('/', handleRelease);
module.exports = router;
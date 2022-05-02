const express = require('express');
const router = express.Router();
const db = require('../db');

const handleInsert = (req,res)=>{
    const articleID = req.body.articleID;
    const auth = req.body.auth;
    const uid = req.body.uid;
    const content = req.body.content;
    const dateline = req.body.dateline;
    const sql = `INSERT INTO comments (articleID,auth,uid,content,dateline) VALUES ("${articleID}","${auth}",${uid},"${content}","${dateline}")`;
    db(sql,result => {
        if (result.affectedRows === 1) {
            return res.send({
                status: 0,
                msg: '评论成功'
            });
        }
        res.send({
            status: 1,
            msg: '评论失败'
        });
    });
}
router.post('/',handleInsert);
module.exports = router;
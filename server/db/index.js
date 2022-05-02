const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456.',
    database:'flowers'
});

module.exports = (sql,callback)=>{
    db.query(sql,function(err,result){
        if(err||!result){
            return console.log(err)
        }
        callback(result);
    });
};
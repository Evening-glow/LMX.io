const express = require('express');
const Joi = require('@hapi/joi');
const expJWT = require('express-jwt');
const cors = require('cors');
const config = require('./config');
const app = express();//express()导出的顶级函数
const db = require('./db');

//Express 中内置的中间件功能。它使用 urlencoded 有效负载解析传入的请求
app.use(express.urlencoded({extended:false}));
//Express 中内置的中间件功能。它使用 JSON 有效负载解析传入的请求
app.use(express.json());
app.use(cors());
//使某些路径不受保护：
app.use(expJWT({ secret: config.privateKey, algorithms: ['HS256']}).unless({path: ['/api/login','/api/register','/api/flowerInfo','/api/search','/api/skill']}));

app.use('/api/search',require('./routes/search'));
app.use('/api/flowerInfo',require('./routes/flowerInfo'));
app.use('/api/register',require('./routes/register'));
app.use('/api/login',require('./routes/login'));
app.use('/api/personal',require('./routes/personal'));
app.use('/api/setup',require('./routes/setup'));
app.use('/api/skill',require('./routes/skill'));
app.use('/api/releaseArt',require('./routes/releaseArt'));
app.use('/api/articles',require('./routes/articles'));
app.use('/api/comments',require('./routes/comments'));
app.use('/api/insertComment',require('./routes/insertComment'));

//错误处理
app.use((err,req,res,next)=>{
    if(err instanceof Joi.ValidationError) {
        return res.send({
            status:1,
            msg:[err.details[0].context.label,err.details[0].message]
        });
    }
    // console.log(err.name)
    //token错误，前端跳转到登录页
    if(err.name === 'UnauthorizedError') {
        return res.send({
            status:1,
            msg:'TOKEN ERROR'
        });
    }
    res.send({
        status:1,
        msg:err.message || err
    });
});
app.listen(5000,()=>console.log('server is running...'));
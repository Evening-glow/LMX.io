const express = require('express');
const router = express.Router();//返回一个路由对象
const bcrypt = require('bcryptjs');
const db = require('../db');

const handleSetup = (req, res) => {
    const { uid, username, oldpw, newpw, email, gender } = req.body;

    //当用户名不是原定的，判断用户名是否已存在
    const sql = `SELECT * FROM users WHERE id=${uid}`;
    db(sql, result => {
        if (result[0].name !== username) {
            const query = `SELECT * FROM users WHERE name="${username}" AND id NOT IN(${uid})`;
            db(query, resultUsername => {
                if (resultUsername.length > 0) {
                    return res.send({
                        status: 1,
                        msg: '修改失败，用户名已存在'
                    });
                } else {
                    const sql = `SELECT * FROM users WHERE id=${uid}`;
                    db(sql, resultSetup => {
                        // 判断旧密码是否正确
                        const compareRes = bcrypt.compareSync(oldpw, result[0].password);
                        if (!compareRes) {
                            return res.send({
                                status: 1,
                                msg: '修改失败，密码错误'
                            });
                        }
                        const newpw_ = bcrypt.hashSync(newpw, 10);
                        const sql = `UPDATE users SET name="${username}",password="${newpw_}",email="${email}",gender="${gender}" WHERE id=${uid}`;
                        db(sql, resultSetup => {
                            if (resultSetup.affectedRows === 1) {
                                return res.send({
                                    status: 0,
                                    msg: '修改成功'
                                });
                            }
                            return res.send({
                                status: 1,
                                msg: '数据库错误，修改失败'
                            });
                        });
                    })
                }
            });
        } else {
            // 判断旧密码是否正确
            const compareRes = bcrypt.compareSync(oldpw, result[0].password);
            if (!compareRes) {
                return res.send({
                    status: 1,
                    msg: '修改失败，密码错误'
                });
            }
            const newpw_ = bcrypt.hashSync(newpw, 10);
            const sql = `UPDATE users SET name="${username}",password="${newpw_}",email="${email}",gender="${gender}" WHERE id=${uid}`;
            db(sql, resultSetup => {
                if (resultSetup.affectedRows === 1) {
                    return res.send({
                        status: 0,
                        msg: '修改成功'
                    });
                }
                return res.send({
                    status: 1,
                    msg: '数据库错误，修改失败'
                });
            });
        }

    });

}
router.post('/', handleSetup);
module.exports = router;
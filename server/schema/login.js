const Joi = require('@hapi/joi');
const loginSchema = {
    username:Joi.string().required(),
    password:Joi.string().required()
};
module.exports = {
    loginSchema
};
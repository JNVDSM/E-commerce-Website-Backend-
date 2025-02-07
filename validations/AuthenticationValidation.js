const Joi = require('joi');


const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required()
    .messages({
      'string.base': 'Name must be a string',
      'string.empty': 'Name is required',
      'string.min': 'Name should have at least 3 characters',
      'string.max': 'Name should not exceed 50 characters',
    }),
  
  email: Joi.string().email().required()
    .messages({
      'string.base': 'Email must be a string',
      'string.email': 'Email must be a valid email address',
      'string.empty': 'Email is required',
    }),

  password: Joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])'))
    .required()
    .messages({
      'string.base': 'Password must be a string',
      'string.empty': 'Password is required',
      'string.min': 'Password should have at least 8 characters',
      'string.pattern.base': 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
    }),

  role_id: Joi.number().integer().positive().required()
    .messages({
      'number.base': 'Role ID must be a number',
      'number.integer': 'Role ID must be an integer',
      'number.positive': 'Role ID must be a positive number',
      'any.required': 'Role ID is required',
    }),
});
const loginSchema = Joi.object({
    email: Joi.string().email().required()
      .messages({
        'string.base': 'Email must be a string',
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email address',
      }),
  
    password: Joi.string().min(8).required()
      .messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password is required',
        'string.min': 'Password should have at least 8 characters',
      }),
  });
module.exports={
    userSchema,
    loginSchema
}
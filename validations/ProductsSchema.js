const Joi = require('joi');
const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required()
    .messages({
      'string.base': 'Product name must be a string',
      'string.empty': 'Product name is required',
      'string.min': 'Product name should have at least 3 characters',
      'string.max': 'Product name should not exceed 100 characters',
    }),
  
  description: Joi.string().max(500).optional()
    .messages({
      'string.base': 'Description must be a string',
      'string.max': 'Description should not exceed 500 characters',
    }),

  category: Joi.string().valid('Electronics', 'Clothing', 'Food', 'Books', 'Furniture').required()
    .messages({
      'any.only': 'Category must be one of Electronics, Clothing, Food, Books, Furniture',
      'string.empty': 'Category is required',
    }),

  price_old: Joi.number().positive().optional()
    .messages({
      'number.base': 'Old price must be a number',
      'number.positive': 'Old price must be a positive value',
    }),

  price_new: Joi.number().positive().required()
    .messages({
      'number.base': 'New price must be a number',
      'number.positive': 'New price must be a positive value',
      'any.required': 'New price is required',
    }),

  start_date: Joi.date().iso().required()
    .messages({
      'date.base': 'Start date must be a valid date',
      'date.format': 'Start date must be in ISO format',
      'any.required': 'Start date is required',
    }),

  expiry_date: Joi.date().iso().greater(Joi.ref('start_date')).optional()
    .messages({
      'date.base': 'Expiry date must be a valid date',
      'date.greater': 'Expiry date must be later than start date',
    }),

  free_delivery: Joi.boolean().required()
    .messages({
      'boolean.base': 'Free delivery must be a boolean value',
      'any.required': 'Free delivery is required',
    }),

  delivery_amount: Joi.number().positive().when('free_delivery', {
    is: false,
    then: Joi.required(),
    otherwise: Joi.optional().allow(null),
  })
  .messages({
    'number.base': 'Delivery amount must be a number',
    'number.positive': 'Delivery amount must be positive',
    'any.required': 'Delivery amount is required when free delivery is false',
  }),

  image_url: Joi.string().uri().required()
    .messages({
      'string.base': 'Image URL must be a string',
      'string.uri': 'Image URL must be a valid URI',
      'any.required': 'Image URL is required',
    }),
});


module.exxports={
    productSchema
    
}
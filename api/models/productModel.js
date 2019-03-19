'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  name: {
    type: String,
    required: 'Please enter the product name.',
    minlength: [3, 'Type more than 2 characters.'],
    maxlength: [100, 'More than 100 characteres not avaliable.']
  },
  price: {
    type: Number,
    required: 'Plese enter the product price.',
    min: [0.01, 'Preço não pode ser 0']
  },

  quantity: {
    type: Number,
    min: 0,
    default: 0,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value. Please enter a integer number.'
    }
  }
});

module.exports = mongoose.model('Products', ProductSchema);

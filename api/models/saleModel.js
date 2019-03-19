'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let Product = require('mongoose').model('Products').schema;
let cpfValidator = require('../scripts/cpfValidator').cpfValidator;

var SaleSchema = new Schema({
  saleId: {
    type: Schema.Types.ObjectId,
    required: true,
    auto: true
  },
  cpf: {
    type: String,
    required: 'Plese enter your CPF number',
    minlength: [11, 'The CPF must be 11 numbers'],
    maxlength: [11, 'The CPF must be 11 numbers'],
    validate: {
      validator: function (v) {
        return cpfValidator(v.toString())
      },
      message: props => `${props.value} is not a valid CPF!`
    }
  },
  products: {
    type: [Product],
    default: undefined,
    required: 'Please enter the products'
  }
});

module.exports = mongoose.model('Sales', SaleSchema);
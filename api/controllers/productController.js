'use strict';

var mongoose = require('mongoose'),
Product = mongoose.model('Products');

// Buscar todos os produtos cadastrados
exports.get_all_products = function (req, res) {
  Product.find({}, function (err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

// Buscar produto através do productId (id do produto)
exports.get_product = function (req, res) {
  Product.find({
    productId: req.params.productId
  }, function (err, product) {
    if (err)
      res.send(err);

    if (Array.isArray(product) && product.length) { // Verifica se há um produto válido
      res.json(product);
    } else {
      res.json({
        message: 'Not found!'
      });
    }

  });
};

// Cria um produto
exports.create_product = function (req, res) {
  var new_product = new Product(req.body);
  new_product.save(function (err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

// Atualiza um produto através do productId
exports.update_product = function (req, res) {
  Product.findOneAndUpdate({
    productId: req.params.productId
  }, req.body, {
    new: true
  }, function (err, product) {
    if (err)
      res.send(err);

    if (product) { // verifica se há um produto válido para ser atualizado
      res.json(product);
    } else {
      res.json({
        message: 'Not found!'
      });
    }
  });
};

// Exclui um produto através do productId
exports.delete_product = function (req, res) {
  Product.deleteOne({
    productId: req.params.productId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({
      message: 'Successfully deleted'
    });
  });
};
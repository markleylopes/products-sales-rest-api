'use strict';

var mongoose = require('mongoose'),
  Sale = mongoose.model('Sales');

// Buscar todas as vendas efetuadas
exports.get_all_sales = function (req, res) {
  Sale.find({}, function (err, sale) {
    if (err)
      res.send(err);
    res.json(sale);
  });
};

// Buscar uma venda específica através saleID (id da venda)
exports.get_sale = function (req, res) {
  Sale.find({
    saleId: req.params.saleId
  }, function (err, sale) {
    if (err)
      res.send(err);

    if (Array.isArray(sale) && sale.length) { // Verifica se há dados retornados
      res.json(sale);
    } else {
      res.json({
        message: 'Not found!'
      });
    }

  });
};

// Criar uma venda
exports.create_sale = function (req, res) {
  var new_sale = new Sale(req.body);
  new_sale.save(function (err, sale) {
    if (err)
      res.send(err);
    res.json(sale);
  });
};

// Atualizar uma venda através do saleId
exports.update_sale = function (req, res) {
  Sale.findOneAndUpdate({
    saleId: req.params.saleId
  }, req.body, {
    new: true
  }, function (err, sale) {
    if (err) {
      res.send(err);
    }

    if (sale) {
      res.json(sale);
    } else {
      res.json({
        message: 'Not found!'
      });
    }
  });
};

// Excluir uma venda através do saleId
exports.delete_sale = function (req, res) {
  Sale.deleteOne({
    saleId: req.params.saleId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({
      message: 'Successfully deleted'
    });
  });
};
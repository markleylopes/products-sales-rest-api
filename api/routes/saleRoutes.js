'use strict';
module.exports = function (app) {
  var sale = require('../controllers/saleController');

  // ROUTES
  app.route('/sales')
    .post(sale.create_sale) // CREATE
    .get(sale.get_all_sales) // READ ALL

  app.route('/sales/:saleId')
    .get(sale.get_sale) // READ by salesId
    .put(sale.update_sale) // UPDATE by salesId
    .delete(sale.delete_sale); // DELETE by salesId
};
'use strict';
module.exports = function (app) {
  var product = require('../controllers/productController');

  // ROUTES
  app.route('/products')
    .post(product.create_product) // CREATE
    .get(product.get_all_products) // READ ALL

  app.route('/products/:productId')
    .get(product.get_product) // READ by productId
    .put(product.update_product) // UPDATE by productId
    .delete(product.delete_product); // DELETE by productId
};
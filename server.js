var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/productModel'), //Product Model
  Sale = require('./api/models/saleModel'), // Sale Model
  bodyParser = require('body-parser');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ProdSalesDB', {
  useNewUrlParser: true
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var productRoutes = require('./api/routes/productRoutes'); // Product Routes
var saleRoutes = require('./api/routes/saleRoutes'); // Sale Routes

productRoutes(app);
saleRoutes(app);

app.listen(port);

app.use(function (req, res) {
  res.status(404).send({
    message: `Sorry, the url you requested was not found.  (-_-)  | 404 | Url: ${req.originalUrl}`
  })
});

console.log('API server started on: ' + port);

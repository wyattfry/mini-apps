var express = require('express');
var app = express();
var toCSV = require('./toCSV');

var morgan = require('morgan');
var parser = require('body-parser');

app.use(express.static('client/'));
app.use(parser.json());

app.post('/', function(req, res) {
  res.send( toCSV(req.body) );
});

app.listen(3000);

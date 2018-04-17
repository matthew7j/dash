'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/products', function(req, res) {
    res.render('products');
});

app.listen(process.env.PORT || 3000, function() {
    console.log(`Website listening on port ${process.env.PORT}`);
});
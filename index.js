/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

module.exports = require('./lib/express');


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({ 'hey': 'what up' });
});

app.get('/make-call', function (req, res) {
  res.json({ 'hey': 'what up' });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
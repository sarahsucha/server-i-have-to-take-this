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
// var vcapServices = require('vcap_services');
// var extend = require('util')._extend;
var watson = require('watson-developer-cloud');

app.get('/', function (req, res) {
  res.json({ 'hey': 'what up' });
});

app.get('/make-call', function (req, res) {
  res.json({ 'hey': 'what up' });
});

app.get('/watson-token', function(req, res) {
  var authorization = new watson.AuthorizationV1({
    username: '89f3427c-033f-4b69-9209-e96c396a9e86',
    password: 'QapGlIwXZtOx',
    url: watson.TextToSpeechV1.URL
  });

  authorization.getToken(function (err, token) {
    if (!token) {
      console.log('error:', err);
    } else {
      res.json(token);
      // Use your token here
    }
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

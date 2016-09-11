/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

module.exports = require('./lib/express');

var twilio = require('twilio');
var client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
var client = new twilio.RestClient(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
// var client = new twilio.RestClient('ACCOUNT_SID', 'AUTH_TOKEN');



var express = require('express');
var app = express();

app.engine('.html', require('ejs').__express); // Parse .html files with ejs.
app.set('views', __dirname + '/public'); // Where to look for views.
app.set('view engine', 'html'); // The default engine extension to use
// var vcapServices = require('vcap_services');
// var extend = require('util')._extend;
var watson = require('watson-developer-cloud');

app.get('/', function (req, res) {
  res.render('index.html');
});

app.use(express.static(process.cwd() + '/public'));

app.get('/make-call', function (req, res) {
  res.json({ 'hey': 'what up' });
});

app.get('/watson-token', function(req, res) {
  var authorization = new watson.AuthorizationV1({
    username: 'b3bb416e-af2e-4d1d-a4a5-cbeab56cd102',
    password: 'AVLc1Di3y0BT',
    url: watson.SpeechToTextV1.URL
  });

  authorization.getToken(function (err, token) {
    if (!token) {
      console.log('error:', err);
    } else {
      res.send(token);
      // Use your token here
    }
  });
});

app.get('/', function (req, res) {
  res.json({ 'hey': 'what up' });
});

app.post('/call', function (req, res) {
  console.log(req.body)
  // console.log("HELLO WORLD")
  client.makeCall({

    to: '+13302070939',
    // to: req.body.to ,
    from:'+16502156875',
    // url: 'http://rabbitguides.net/hello-monkey.php'
    url: 'https://demo.twilio.com/welcome/voice/'
  }, function(err, responseData) {
    console.log(err);
    console.log(responseData);
    res.json()
  })
  // // res.json({ 'hey': 'what up' });
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

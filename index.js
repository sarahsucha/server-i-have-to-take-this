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
  })
  // // res.json({ 'hey': 'what up' });
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
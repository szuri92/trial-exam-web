'use strict';

var bodyParser = require('body-parser')
var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "cerna2",
  database: "vizsga"
});

app.post('/decode', function(req, res){
  if (req.body.shift > -26 && req.body.shift <26) {
    con.query('INSERT INTO codes (shift, text) VALUES (' + req.body.shift + ',' + req.body.text + ');')
    res.send({'status': 'ok', 'text': 'text'});
  } else if (req.body.shift <= -26 && req.body.shift >= 26 || err) {
    res.send({'status': 'err', 'error': 'Shif is out of bund'});
  }
});


app.get('/decode/all', function(req, res) {
  var allText = con.query('SELECT text FROM codes;', function(err, rows){
    if (err) {
      console.log(err);
      return;
    }
    res.send(rows);
  });
});

app.listen(5000);

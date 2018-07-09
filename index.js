var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/public/textbook'));
app.use(express.static(__dirname + '/public/textbook/RST'));
app.use(express.static(__dirname + '/public/textbook/lib'));
app.use(express.static(__dirname + '/public/textbook/JSAV'));
app.use(express.static(__dirname + '/public/textbook/Books/simple_demo/html/'));

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname + '/public/textbook/Books/simple_demo/html/index.html'));
});

server.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

exports = module.exports = app;

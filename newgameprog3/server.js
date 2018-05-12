var express = require('express');
var path = require('path');
var server = express();
var server1 = require('http').Server(server);
var io = require('socket.io')(server1);

server.use(express.static("."));
server.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3333);
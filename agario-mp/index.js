var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

app.use(express.static('public/agario'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/agario/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(socket){
	  console.log('a user disconnected');
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
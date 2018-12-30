var express = require('express')
var app = express();
var socket = require('socket.io')
var port = process.env.PORT || 4000
var server = app.listen(port,function(){
    console.log("Listening to the port 4000");
})

app.use('/',express.static('public'));
var io = socket(server)
io.on('connection',function(socket){
    console.log(socket.id)

    socket.on('chat',function(data){
        io.sockets.emit('chat',data)
    });
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    });
})

module.exports = port

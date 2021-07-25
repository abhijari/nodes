//we need http coz we dont have express
const http = require('http')

//its thired party 
const socketio = require('socket.io')

//make server using node
const server = http.createServer((req,res)=>{
    res.end("server craeted!!")
}).listen(8080)

const io = socketio(server);

io.on('connection',(socket,req)=>{
    //ws.send bcome socket.emit
    socket.emit('welcome','Welcome to the socket.io server...')
    //message means name of an event you want to take
    socket.on('message',(msg)=>{
        console.log(msg)

        if(io.sockets.sockets[socket.id]!=undefined){
            console.log(io.sockets.sockets[socket.id]); 
          }else{
            console.log("Socket not connected");
          } 
    })


})
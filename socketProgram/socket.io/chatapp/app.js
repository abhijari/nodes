const express = require('express')
const app = express();
app.use(express.static('./public'))
const socketio = require('socket.io')
const server = app.listen(8080)
const io = socketio(server)
var client=0;
io.on('connection',(socket)=>{
    client++;
    io.emit('newClient',{cnt:client})
    socket.emit('msgfromserver',{data:'wolcome to socket.io server'})
    socket.on('msgtoserver',(msg)=>{
        console.log(msg)
    })

    socket.on('disconnect', () => {
        client--;
        io.emit('messageToClients',{text:'<b>left the chat</b>',id:socket.id})
        io.emit('newClient',{cnt:client})
         });

    socket.on('newMessageToServer',(message)=>{
        io.emit('messageToClients',{text:message.text,id:message.id})
    })
})

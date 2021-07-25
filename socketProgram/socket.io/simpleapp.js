const express = require('express')
const app = express();
app.use(express.static('./public'))
const socketio = require('socket.io')
const server = app.listen(8080)
const io = socketio(server)
io.on('connection',(socket)=>{
    socket.emit('msgfromserver',{data:'wolcome to socket.io server'})
    socket.on('msgtoserver',(msg)=>{
        console.log(msg)
    })

    socket.on('newMessageToServer',(message)=>{
        io.emit('messageToClients',{text:message.text})
    })
})

const express = require('express')
const app = express();
const socketio = require('socket.io')

let namespaces = require('./data/namesapces')
app.use(express.static('./public'))
const server = app.listen(8080)
const io = socketio(server)

//retrive a namesapce throu loop

// io.on('connection') is equal to io.of('/').on('connection')
io.on('connection',(socket)=>{
    // console.log(socket.handshake)
    //build array and send  back data with img and endpoints
    let nsData = namespaces.map((ns)=>{
        return{
            img : ns.img,
            endpoint : ns.endpoint
        }
    })

    //send ns data to clinet.we need to use socker,not io coz we want send the client
    socket.emit('nsList',nsData) 

})

namespaces.forEach((namespace)=>{
    io.of(namespace.endpoint).on('connection',(nsSocket)=>{
        console.log(nsSocket.id)
        const username = nsSocket.handshake.query.username
        //a socket has connected to one of our chatgrup namesapce 
        //send that ns grup info back 
        nsSocket.emit('nsRoomLoad',namespace.rooms)
        nsSocket.on('joinRoom',(roomToJoin,numberOfUserCallback)=>{
            //whenever socket switch the room that time kick out the socket
            const roomToLeave = Object.keys(nsSocket.rooms)[1];
            // console.log("object of roomtoleave:"+Object.keys(nsSocket.rooms))
            // console.log("roomToLeave : "+roomToLeave)
            // console.log("roomToJoin : "+roomToJoin)
            nsSocket.leave(roomToLeave)
            //send back number of user aftrer leave room
            updateUserInRoom(namespace,roomToLeave)
            nsSocket.join(roomToJoin)
            // io.of('/wiki').in(roomToJoin).clients((error,clients)=>{
            //     console.log(clients.length)
            //     numberOfUserCallback(clients.length)
            // })
            //sent historty of chat to the sockect when it join the room
            const nsRoom = namespace.rooms.find((room)=>{
                return room.roomTitle === roomToJoin
            })
            nsSocket.emit('historyCatchup',nsRoom.history)

            //also send back number of user join the room
            updateUserInRoom(namespace,roomToJoin)

        })
        nsSocket.on('newMessageToServer',(msg)=>{
            const fullMsg={
                text : msg.text,
                time : Date.now(),
                username : username,
                avatar : "https://via.placeholder.com/30"    
            }
            //send this message to all sockets thats are in the room 
            //how to we find out what room this socket in?
            console.log(nsSocket.rooms)
            const roomTitle = Object.keys(nsSocket.rooms)[1];

            const nsRoom = namespace.rooms.find((room)=>{
                return room.roomTitle === roomTitle
            })
            console.log(nsRoom)
            nsRoom.addMessage(fullMsg)
            io.of(namespace.endpoint).in(roomTitle).emit('messageToClients',fullMsg)
        })
    })
});

function updateUserInRoom(namespace,roomToJoin){
io.of(namespace.endpoint).in(roomToJoin).clients((error,clients)=>{
    console.log(clients.length)
    io.of(namespace.endpoint).in(roomToJoin).emit('updateMember',clients.length) 
})
}
//this file is only for making socketio and express server 
const express = require('express')
const app = express();
app.use(express.static('public'));
const socketio = require('socket.io')
const server = app.listen(8080)
const io = socketio(server);
const helmet = require('helmet')
app.use(helmet())

module.exports={
    app,
    io
}
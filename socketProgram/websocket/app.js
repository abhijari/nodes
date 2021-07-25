const http = require('http')

const websocket = require('ws');

const server = http.createServer((req,res)=>{
    res.end("hello")
}).listen(8080)

const wss = new websocket.Server({server})

wss.on('headers',(headers,req)=>{
    console.log(headers);
})

wss.on('connection',(ws,req)=>{
    ws.send("Welocome to the socket connection")
    ws.on('message',(event)=>{
        console.log(event)
    })
})
 
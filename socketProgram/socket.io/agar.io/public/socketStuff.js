let socket = io.connect('http://localhost:8080/')

//this function is called when thr user clicks on the start button
function init(){
    draw()
    //call init when the client is ready for the data
    socket.emit('init',{
        playerName: player.name
    })
}
socket.on('initReturn',(data)=>{
    console.log(data)
    orbs = data.orbs

    setInterval(()=>{
        socket.emit('tick',{
            xVector : player.xVector,
            yVector : player.yVector
        })
    },33)
})

socket.on('tock',(data)=>{
    console.log(data)
    players = data.players
})
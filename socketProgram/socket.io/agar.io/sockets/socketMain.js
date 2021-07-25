//where all our main socket stuff will go
const io = require('../servers').io

// ===========Player=============
const Player = require('./classes/Player')
const PlayerConfig = require('./classes/PlayerConfig')
const PlayerData = require('./classes/PlayerData')
const orb = require('./classes/Orbs')
const players = []
let orbs= []
let settings= {
    defaultOrbs: 500,
    defaultSpeed: 6,
    defaultSize : 6,
    //as player gets bigger ,the zoom needs to go out
    defaultZoom:1.5,
    worldWidth:500,
    worldHeight :500
}
initGame()

//isuues a message to every connected socket every 30fps

setInterval(()=>{ 
    io.to('game').emit('tock',{
        players
    })
},33)
io.sockets.on('connect',(socket)=>{
    let player={}
    socket.on('init',(data)=>{
        //add player to the game namespace
        socket.join('game')
        let playerConfig = new PlayerConfig(settings)
        let playerData = new PlayerData(data.playerName,settings)
        player = new Player(socket.id,playerConfig,playerData)
        socket.emit('initReturn',{
            orbs
        })
        players.push(playerData)
    })
    socket.on('tick',(data)=>{

        console.log("on tick")
        console.log(data)
        console.log(player)

        speed = player.playerConfig.speed
        xV = player.playerConfig.xVector = data.xVector;
        yV = player.playerConfig.yVector = data.yVector;
    
        if((player.locX < 5 && player.xVector < 0) || (player.locX > 500) && (xV > 0)){
            player.locY -= speed * yV;
        }else if((player.locY < 5 && yV > 0) || (player.locY > 500) && (yV < 0)){
            player.locX += speed * xV;
        }else{
            player.locX += speed * xV;
            player.locY -= speed * yV;
        }    
    })
 
})
//run at the beginnig of a new game
function initGame()
{
    for(let i=0;i<settings.defaultOrbs;i++){

        orbs.push(new orb(settings))
    }
}

module.exports = io


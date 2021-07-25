
// ================================
// =============DRAWING============
// ================================
player.locX = Math.floor(500*Math.random()+10)
player.locY = Math.floor(500*Math.random()+10)

function draw(){
        //reset translation to default
    context.setTransform(1,0,0,1,0,0)
    //clear screen
     context.clearRect(0,0,canvas.width,canvas.height)

    //clamp the camara to the player
    camX = -player.locX + canvas.width/2
    camY = -player.locY + canvas.height/2

    //transalte means move whole canvas according x and y coord
    context.translate(camX,camY)

    // context.beginPath()
    // context.fillStyle = "rgb(255,0,0)"
    // //arc(x-pos,y-pos,radius,strat angle,end angle)
    // context.arc(player.locX,player.locY,10,0,Math.PI*2)
    // // context.arc(200,200,10,0,Math.PI*2)
    // context.fill()
    // context.lineWidth = 3;
    // context.strokeStyle = 'rgb(0,255,0)'
    // context.stroke()

    //draw all the players
    players.forEach(p=>{

        context.beginPath()
        context.fillStyle = p.color
        //arc(x-pos,y-pos,radius,strat angle,end angle)
        context.arc(p.locX,p.locY,10,0,Math.PI*2)
        // context.arc(200,200,10,0,Math.PI*2)
        context.fill()
        context.lineWidth = 3;
        context.strokeStyle = 'rgb(0,255,0)'
        context.stroke()
    })
    //draw all the orbs
    orbs.forEach(orb=>{
        context.beginPath()
        context.fillStyle = orb.color
        context.arc(orb.locX,orb.locY,orb.radius,0,Math.PI*2)
        context.fill()
    })
    requestAnimationFrame(draw)

}

canvas.addEventListener('mousemove',(event)=>{
    console.log(event)
    const mousePosition = {
        x: event.clientX,
        y: event.clientY
    };
    const angleDeg = Math.atan2(mousePosition.y - (canvas.height/2), mousePosition.x - (canvas.width/2)) * 180 / Math.PI;
    if(angleDeg >= 0 && angleDeg < 90){
        xVector = 1 - (angleDeg/90);
        yVector = -(angleDeg/90);
    }else if(angleDeg >= 90 && angleDeg <= 180){
        xVector = -(angleDeg-90)/90;
        yVector = -(1 - ((angleDeg-90)/90));
    }else if(angleDeg >= -180 && angleDeg < -90){
        xVector = (angleDeg+90)/90;
        yVector = (1 + ((angleDeg+90)/90));
    }else if(angleDeg < 0 && angleDeg >= -90){
        xVector = (angleDeg+90)/90;
        yVector = (1 - ((angleDeg+90)/90));
    }

    player.xVector = xVector
    player.yVector = yVector


})
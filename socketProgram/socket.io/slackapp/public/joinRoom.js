function joinRoom(roomName){

    nsSocket.emit('joinRoom',roomName,(newNumberOfMember)=>{
         document.querySelector('.curr-room-num-users').innerHTML=`${newNumberOfMember} <span class="glyphicon glyphicon-user"></span>`
    })

    nsSocket.on('historyCatchup',(history)=>{
        const messageUl = document.querySelector('#messages')
        messageUl.innerHTML = ""
        history.forEach(msg => {
            newMsg = buildHTML(msg)
            messageUl.innerHTML += newMsg
        });
        messageUl.scrollTo(0,messageUl.scrollHeight)
    })

    nsSocket.on('updateMember',(member)=>{
        document.querySelector('.curr-room-num-users').innerHTML=`${member} <span class="glyphicon glyphicon-user"></span>`
        document.querySelector('.curr-room-text').innerText=`${roomName}`
    })

}

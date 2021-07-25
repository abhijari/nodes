function joinNs(endpoint){
    if(nsSocket){
        //when client switch namespace at this time we close socket 
        //check to see if nsSocket is actually a socket
        nsSocket.close()
        //remove the eventlistner before it's added again
        document.querySelector('.message-form').removeEventListener('submit',formSubmision)

    }
   nsSocket = io(`http://localhost:8080${endpoint}`)
    nsSocket.on('nsRoomLoad',(nsRooms)=>{
        console.log(nsRooms)
        let roomList = document.querySelector('.room-list')
        roomList.innerHTML=""
        nsRooms.forEach((room)=>{
            if(room.privateRoom){
                glphy = 'lock'
            }
            else{
                glphy = 'globe'
            }
            roomList.innerHTML+=`<li class="room"><span class="glyphicon glyphicon-${glphy}"></span>${room.roomTitle}</li>`
        })

        // add click listner to each room
        Array.from(document.getElementsByClassName('room')).forEach(elem => {
            elem.addEventListener('click',(e)=>{
                joinRoom(e.target.innerText)
            })
        });

        //add to room automatcally ....first time
        const topRoom = document.querySelector('.room')
        const topRoomName = topRoom.innerText
        
        joinRoom(topRoomName)

    })

    nsSocket.on('messageToClients',(msg)=>{
        newMsg = buildHTML(msg)
        console.log(msg)
        document.querySelector('#messages').innerHTML+=newMsg
    })
    
    
    document.querySelector('.message-form').addEventListener('submit',formSubmision)
}
function formSubmision(event){
    event.preventDefault();
   newMesssag = document.querySelector('#user-message').value
    nsSocket.emit('newMessageToServer',{text:newMesssag})
}

function buildHTML(msg){
    const convertedDate = new Date(msg.time).toLocaleString();
    const newHTML = `
    <li>
        <div class="user-image">
            <img src="${msg.avatar}" />
        </div>
        <div class="user-message">
            <div class="user-name-time">${msg.username} <span>${convertedDate}</span></div>
            <div class="message-text">${msg.text}</div>
        </div>
    </li>`

    return newHTML
}
// const scoket = io('http://localhost:8080')
const username = prompt("Enter your name")
const scoket = io('http://localhost:8080',{
    query:{
        username : username
    }
})
let nsSocket=""
//listen for ns list which give all namesapces
scoket.on('nsList',(nsData)=>{
    console.log(nsData)
    let namesapceDiv = document.querySelector('.namespaces')
    namesapceDiv.innerHTML=""
    nsData.forEach((ns) => {
        namesapceDiv.innerHTML+=`<div class="namespace" ns="${ns.endpoint}"><img src="${ns.img}"></div>`
    });

    //add a click listener to namespaces
    //we cant use direclty throu foreach coz result data in format of collection
    Array.from(document.getElementsByClassName('namespace')).forEach((elem)=>{
        elem.addEventListener('click',(e)=>{
            const nsEndpint = elem.getAttribute('ns')
            console.log(nsEndpint)
            joinNs(nsEndpint)
        })
    })

    joinNs('/wiki');
})



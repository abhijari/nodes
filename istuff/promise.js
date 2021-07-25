let posts=[
    {id:1,name:"abhi"},
    {id:2,name:"jari"}
]
function get(){
    setTimeout(() => {
        console.log(posts)
    }, 2000);
}
function post(data){
 return new Promise((resolve,reject)=>{
     posts.push(data);
     const err = false;
     if(!err){
         resolve();
     }
     else{
         reject();
     }
 })
}

post({id:3,name:"abhijari"}).then(get)


//resolve all promise
const promise1 = Promise.resolve('hello');
const promise2 = 10
const promise3 = new Promise((resolve,reject)=>{
    resolve("lol")
})

Promise.all([promise1,promise2,promise3]).then((val)=>{
    console.log(val)
})

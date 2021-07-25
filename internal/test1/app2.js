express = require('express');
app = express();



app.use((req,res,next)=>{
    console.log("first middle")
    next();
})

app.get("/",(req,res)=>{
    res.end("hello")
})

app.use((req,res,next)=>{
    console.log("sec middle")
    next();
})

app.get("/a",(req,res)=>{
    res.end("hell2")
})
app.listen(8080,(res)=>{
    console.log("connect")
})
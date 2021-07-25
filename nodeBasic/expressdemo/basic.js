express = require('express')

app = express();

//without tamplate engine
app.get('/',(req,res)=>{
    res.send("home page mf")
})
app.get('/contact',(req,res)=>{
    res.send("contact page mf")
})
app.get('/htmpage',(req,res)=>{
    res.sendFile('page1.html')
})
//dynamically get request
app.get('/profile/:id',(req,res)=>{
    res.send('u request '+req.params.id+' id')
})
//end 

app.listen(8080)
express = require('express')
var bodyParser = require('body-parser')
app = express();

//add template 
app.set('view engine','ejs')

//

//sey static file
app.use('/assets',express.static('assets'))

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})

//query string
//like http://localhost:8080/contactus?dept=IT&name=abhishek
app.get('/contactus',(req,res)=>{
    res.render('contactus',{qs:req.query});
})
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/contactus',urlencodedParser,(req,res)=>{
    console.log(req.body)
    res.render('contactdata',{data:req.body});
})

app.get('/profile/:name',(req,res)=>{
    var data={
        age:20,
        job:'never',
        hobby:['djing','gaming','etc..']
    }
    res.render('profile',{name:req.params.name , data:data})
})



app.listen(8080)
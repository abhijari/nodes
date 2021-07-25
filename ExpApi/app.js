const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bookroute = require('./Controller/BookRouter');
const cors = require('cors');
app.use(express.static('./public'))
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use('/book',bookroute);
mongoose.connect("mongodb://localhost/booksDb").then(()=>{
    console.log("Db connected")
})

app.listen(8080,()=>{
    console.log("server connected")
});
const express = require('express');
const route = express.Router();
const bookmodel = require('../Model/bookSchema');
const authmodel = require('../Model/AutherSchema');
const multer = require('multer')
route.get('/',(req,res)=>{
    bookmodel.find((err,data)=>{
        res.send(data);
    })
})

route.get('/detail/:id',(req,res)=>{
    bookmodel.findById({_id:req.params.id},(err,data)=>{
        res.send(data);
    })
})

var storge = multer.diskStorage({
    destination:(req,res,callback)=>{
        var dir = "./public/upload"
        callback(null, dir)
    },
    filename:(req,file,callback)=>{
        callback(null , file.originalname)
    }
})
var upload = multer({storage:storge})

route.post('/add',upload.single("image"),(req,res)=>{
    
    console.log(req)
    var bookobj = new bookmodel({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        booktype:req.body.booktype
    })

    bookobj.save((err)=>{
        if(err){
            return res.send(err)
        }
        res.json({message:"inserted successfully"})
    })
})

route.put('/update/:id',(req,res)=>{
    
    console.log(req)
 

    bookmodel.findByIdAndUpdate({_id:req.params.id},req.body,{new :true},(err,data)=>{
        if (err) {
            return res.status(500).send("There was a problem updating.");
        }
        res.status(200).send(data);
    })
})

route.delete('/delete/:id',(req,res)=>{
    bookmodel.findByIdAndRemove({_id:req.params.id},(err,data)=>{
        if (err) {
            return res.status(500).send("There was a problem deleting.");
        }
        res.status(200).send(data);
    })
})

module.exports = route;      
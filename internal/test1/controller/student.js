const express = require("express");
const router = express.Router();
const studentModel = require('../model/student')
bodyparser = require('body-parser');

router.use((req,res,next)=>{
    console.log("stud middle");
    next();
})
router.get("/",(req,res)=>{

    studentModel.find((err,docs)=>{
        res.render("home",{data:docs});
    })
})

router.get("/add",(req,res)=>{
    res.render("addstud")
})
var urlencodedParser = bodyparser.urlencoded({ extended: false })
router.post("/add",urlencodedParser,(req,res)=>{
    console.log(req.body)
    var stud = new studentModel({
        name : req.body.name,
        rollno : req.body.rno,
        age : req.body.age
    })
    stud.save();
    res.send("ok");
})

router.get("/update2",urlencodedParser,(req,res)=>{
    console.log(req.query)
    studentModel.find({"_id":req.query.id},(err,doc)=>{
        res.send(doc);

    })
})

router.get("/update",urlencodedParser,(req,res)=>{
    var ObjectID = require('mongodb').ObjectID;
    console.log(req.query)
    studentModel.updateOne({"_id":ObjectID(req.query.id)},{$set:{"name":"abhi2"}});
})
module.exports = router;
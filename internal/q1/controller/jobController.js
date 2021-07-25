const express = require("express");
const router = express.Router();
const jobModel = require("../models/jobModel");
const multer = require('multer');
bodyparser = require('body-parser');

var storge = multer.diskStorage({
    destination:(req,res,callback)=>{
        var dir = "./content/img"
        callback(null, dir)
    },
    filename:(req,file,callback)=>{
        callback(null , file.originalname)
    }
})
//var upload = multer({storage:storge}).array('img',12)
var upload = multer({storage:storge})
router.get("/",(req,res)=>{

    jobModel.find((err,docs)=>{
        res.render("home",{data:docs});
    })
})
router.get("/register",(req,res)=>{
    res.render("add");
})
var urlencodedParser = bodyparser.urlencoded({ extended: false })
router.post("/add",urlencodedParser,upload.single("img"),(req,res)=>{

    // upload(req,res,(err)=>{
    //     if(err){
    //         return res.send("file not upload")
    //     }
    //     res.send('upload successfully')
    // })
    console.log(req.file.filename);
    //console.log(req);
    console.log(req.body)
    var job = new jobModel({
        name : req.body.name,
        email : req.body.email,
        phno : req.body.phno,
        address : req.body.address,
        city : req.body.city,
        state : req.body.state,
        qualification : req.body.qualification,
        experience : req.body.experience,
        lastCompanyName : req.body.lastCompanyName,
        expectedSalary : req.body.expectedSalary,
        applyFor : req.body.applyFor,
        img:req.file.filename
    })

    job.save();
    res.end("save");

})
module.exports = router;
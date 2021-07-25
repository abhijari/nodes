const express = require("express");
const router = express.Router();

router.use((req,res,next)=>{
    console.log("tech middle");
    next();
})

router.get("/teacher",(req,res)=>{
    res.render("home2")
})

router.get("/addTeacher",(req,res)=>{
    res.render("addteacher")
})
module.exports = router;
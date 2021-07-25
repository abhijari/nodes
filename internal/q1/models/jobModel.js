var mongoose = require('mongoose');
var jobSchema= new mongoose.Schema({
    name : String,
    email : String,
    phno : Number,
    address : String,
    city : String,
    state : String,
    qualification : String,
    experience : String,
    lastCompanyName : String,
    expectedSalary : Number,
    applyFor : String,
    img:String
});
var jobModel = mongoose.model("student",jobSchema);
module.exports = jobModel;
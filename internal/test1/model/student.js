var mongoose = require('mongoose');
var studentSchema= new mongoose.Schema({
    name : String,
    rollno : Number,
    age : Number
});
var studentModel = mongoose.model("student",studentSchema);
module.exports = studentModel;
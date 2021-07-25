const mongoose = require('mongoose');
const bookSchema = require('./bookSchema');
const autherSchema =new mongoose.Schema({
    name:String,
    phno:Number,
    books:bookSchema.schema
});

const autherModel = mongoose.model('auther',autherSchema);
module.exports = autherModel;
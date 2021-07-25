const mongoose = require('mongoose');

const bookSchema =new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    booktype:String
});

const bookModel = mongoose.model('book',bookSchema);
module.exports = bookModel;
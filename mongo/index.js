const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:9002@cluster0.nbhyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser:true , useUnifiedTopology: true});

mongoose.connection.on('open',()=>{
    console.log("connect")
})

// const cl1schema = new mongoose.Schema({
//     name:String,
//     rno:Number
// }) 

// const cl1 = mongoose.model('cl1',cl1schema)

// var obj = new cl1({
//     name:'jari',
//     rno:5
// })

// obj.save().then(()=>{
//     console.log("yup")
// })

const alienschema = new mongoose.Schema({
    words : {
        type: String,
    }
},{ collection : 'words' })

const t1 = mongoose.model('words',alienschema)

t1.find((err,doc)=>{
    console.log(doc)
})
const alienschema2 = new mongoose.Schema({
    name : {
        type: String,
    }
},{ collection : 'randomname' })

const t2 = mongoose.model('randomname',alienschema2)


// var obj = new t1({
//         words:'snake'
//     })

//     obj.save().then(()=>{
//     console.log("yup")
// })

// var obj2 = new t2({
//     name:'chainsmokers'
// })

// obj2.save().then(()=>{
// console.log("yup")
// })
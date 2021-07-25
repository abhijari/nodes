express = require('express');
mongoose = require('mongoose');
bodyparser = require('body-parser');
app = express();
app.set("view engine","ejs");
studController = require("./controller/student");
techController = require("./controller/teacher");
app.use(express.static('./content'));
app.use(techController)
app.use(studController)
mongoose.connect("mongodb://localhost/clgDb",{ useNewUrlParser:true , useUnifiedTopology: true})
app.listen(8080);
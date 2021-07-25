express = require('express');
mongoose = require('mongoose');
bodyparser = require('body-parser');
app = express();
app.set("view engine","ejs");
jobController = require("./controller/jobController");
app.use(express.static('./content'));
app.use(jobController);
mongoose.connect("mongodb://localhost/job",{ useNewUrlParser:true , useUnifiedTopology: true})
app.listen(8080);
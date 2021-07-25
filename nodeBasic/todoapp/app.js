express = require('express')
todoController = require('./controllers/todoController')
app = express()

app.set('view engine','ejs')

app.use(express.static('./public'))


//fire controllers
todoController(app)

app.listen(8080)


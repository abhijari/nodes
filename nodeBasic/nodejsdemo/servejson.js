server = require('http')


server.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application/json'})
    obj={
        a:'hello',
        b:'mf'
    }
    res.end(JSON.stringify(obj));
}).listen(8080)
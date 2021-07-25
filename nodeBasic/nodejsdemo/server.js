server = require('http')

server.createServer((req,res)=>{
  
    res.writeHead(200,{'Content-type':'text/plain'})
    res.end("hello mf")
    console.log(req);
    console.log(res);
}).listen(8080);
server = require('http')
fs = require('fs')

rs=fs.createReadStream('page1.html');

server.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    rs.pipe(res)
}).listen(8080)
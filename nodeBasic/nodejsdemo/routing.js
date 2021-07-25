server = require('http')
fs = require('fs')

server.createServer((req,res)=>{
    if(req.url=='/home' || req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream('page1.html').pipe(res)
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream('page2.html').pipe(res)
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'content-type':'application/json'})
        var data = {
            a:'hello',
            b:'mf'
        }
        res.end(JSON.stringify(data))
    }
    else{
        
        res.writeHead(404,{'content-type':'text/html'})
        res.end("<h1>404:chal bsdk!!</h1>")
    }
}).listen(8080)
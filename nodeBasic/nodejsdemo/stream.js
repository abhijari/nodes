fs = require('fs');
server = require('http')

rs = fs.createReadStream('file3.txt');
ws = fs.createWriteStream('file4.txt');
rs.on('data',(data)=>{
    console.log("new mf chunk");
    console.log(data);
    ws.write(data);
})

//pipe( doing same thing )
rs.pipe(ws);


server.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    rs.pipe(res);
}).listen(8080)
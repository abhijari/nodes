var file = require('fs');

//sync
var res = file.readFileSync('file1.txt','utf8');
file.writeFileSync('file2.txt',res);

//async
file.readFile('file1.txt','utf8',(res)=>{
    file.writeFile('file2.txt',res,()=>{
        console.log("scseefully")
    })
});
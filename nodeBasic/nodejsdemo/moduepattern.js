
var name="abhi"

var func = function(){
    console.log('sss');
}
//1
module.exports.url="https://hello.io"

//2
module.exports.name=name;
module.exports.func=name;

//3
// module.exports = {
//     variable : name,
//     function : func,
//     urls : url
// }

console.log(module)
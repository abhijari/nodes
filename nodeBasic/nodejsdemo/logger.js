const EventEmitter = require('events');
var url="http://hello.io/";


class Logger extends EventEmitter{
    log(msg){
        console.log(msg);
        this.emit('logged',{id:1, url:'http://hello.io'})
    }    
}

module.exports = Logger;

const res = require('./logger');

logger = new res();

logger.on('logged',(e)=>{
    console.log('listener called', e);
});

logger.log('hello');

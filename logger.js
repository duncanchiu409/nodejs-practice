const eventEmitter=require('events');

var url = 'http://mylogger.io/log';

class Logger extends eventEmitter{ // child class of eventEmitter
    log(message){ // refered as method instead of function
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged',{id:1,url:'http://'});
    }
}

module.exports=Logger; // export the logger class
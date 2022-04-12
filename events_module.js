const eventEmitter=require('events');

// Raise: logging (data: message)

const Logger=require('./logger');
const logger=new Logger();

// Register a listener
logger.on('messageLogged', function(arg){ // e, eventArg
    console.log('Listener called', arg);
});

logger.log('message');
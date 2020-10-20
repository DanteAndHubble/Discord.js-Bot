module.exports = {
    name: 'ping',
    description:"this is a fun ping command!",
    execute(message, args){
        message.channel.send('pong');
    }
}
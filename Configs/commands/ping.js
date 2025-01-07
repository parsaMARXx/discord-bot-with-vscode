module.exports = {
    name: 'ping',
    description: 'Says Pong',
    execute(message, args) {
        message.reply(`Pong!`);
    },
};
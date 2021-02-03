module.exports = {
    name: 'kill',
    description: 'ss',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let user = message.mentions.users.first()

        let answers = [
            `You punched out ${user.username}>'s lights`,
            `You told Monokuma to execute <@${user.username}> and they died`,
            `You wrote <@${user.username}>'s name in the Death Note`,
            `<@${user.username}> was too scared that he died cuz of it`,
        ];
        let response = answers[Math.floor(Math.random() * answers.length)];
        message.channel.send(response)
    }
}; 

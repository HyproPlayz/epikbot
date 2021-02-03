module.exports = {
    name: 'emoji',
    description: '',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if(!question) {
            let answers = [
            '😂',
            '😇',
            '😏',
            '🤢',
            '👾',
            '🤡',
            '💩',
            '🤬',
            '🤖',
            '👽',
            '💀',
            '😷'
        ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('EMOJI!')
                .setColor('#adb805')
                .addField(` REQUESTED BY: ${message.author.username}!`,':D')
                .setThumbnail(message.author.avatarURL())
                .addField('LMAO YOUR EMOJI IS:',response);
            message.channel.send(embed);
        }
    }
}; 

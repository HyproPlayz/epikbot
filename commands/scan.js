module.exports = {
    name: 'scan',
    description: 'Shows how epik you are!',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let user = message.mentions.users.first()
        
            let answers = [
                'crewmate',
                'Impostor'
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            if(user){
                let embed = new Discord.MessageEmbed()
                .setTitle(`SCAN REQUESTED BY ${message.author.username}`)
                .setColor('RANDOM')
                .setThumbnail(user.avatarURL())
                .addField(`${user.username} is:`, response);
                message.channel.send(embed);
            }
            else{
                let embed = new Discord.MessageEmbed()
                .setTitle('SCAN ')
                .setColor('RANDOM')
                .setThumbnail(message.author.avatarURL())
                .addField('You are: ', response);
                message.channel.send(embed);
            }
    }
}; 

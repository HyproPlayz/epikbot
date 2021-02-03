module.exports = {
    name: 'userinfo',
    description: 'userinfo command',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let user = message.mentions.users.first()
        let question = args.slice(1).join(" ");
        if(user){
            let userembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('USER INFO')
            .setThumbnail(user.avatarURL())
            .addField(`USERNAME`,`${user.username}`)
            .addField(`USER ID`,`${user.id}`)
            .addField(`USER TAG`,`${user.tag}`)
            .setFooter(`Command by ${message.author.username}`)
            message.channel.send(userembed);
        }
        else{
            let userembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('USER INFO')
            .setThumbnail(message.author.avatarURL())
            .addField(`USERNAME`,`${message.author.username}`)
            .addField(`USER ID`,`${message.author.id}`)
            .addField(`USER TAG`,`${message.author.tag}`)
            .setFooter(`Command by ${message.author.username}`)
            message.channel.send(userembed);
        }
    }
}; 

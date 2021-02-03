module.exports = {
    name: 'membercount',
    description: 'serverinfo command',
    async execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");
        let server = message.guild
        let channels = message.guild.channels.cache
        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`MEMBER COUNT FOR : ${server.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField(`MemberCount:`,`${message.guild.memberCount}`,true)
        message.channel.send(embed);
    }
}; 

const { DiscordAPIError } = require("discord.js")

const Discord = require('discord.js')
module.exports = {
    name : 'slowmode',
    description : 'ssdds',
     async execute(message,args){
        if(!args[0])return message.channel.send('Failed to put slowmode!')
        if(isNaN(args[0])) return message.reply("Please type a real number bruh");
        message.channel.setRateLimitPerUser(args[0])
        let embed = new Discord.MessageEmbed()
        .setTitle('Slowmode')
        .setDescription(`Slowmode successfully set to ${args[0]}s`)
        .setColor('GREEN')
        message.channel.send(embed)
        .catch(() => {
            message.channel.send("Failed to put cooldown")
              })
    }
}
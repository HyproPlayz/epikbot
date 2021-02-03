const { DiscordAPIError } = require('discord.js')
const db = require('quick.db')
module.exports = {
    name : 'fight',
    description : 'sdklskdlskd',
    async execute(message,args){
        const user = message.mentions.users.first()
        let rand = Math.floor(Math.random() * (10 - 500) +  5900) 
        if(!user)return message.reply('Who do you want to fight?')
        else {
            let embed = new Discord.MessageEmbed()
            .setTitle(``)
        }
    }
}
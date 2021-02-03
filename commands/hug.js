const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'hug',
    description: 'no u',
    async execute(message, args) {
        const data = await fetch("https://nekos.life/api/hug").then((res) => res.json())
        let user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
                .setTitle(`${message.author.username} hugged ${user.username}`)
                .setFooter(message.author.tag)
                .setColor('RANDOM')
                .setDescription(`Click here if the image failed to load!(${data.url})`)
                .setImage(`${data.url}`)
                .setTimestamp()
            message.channel.send(embed)
        }
        else{
            const embed = new MessageEmbed()
                .setTitle(`${message.author.username} hugged themselves`)
                .setFooter(message.author.tag)
                .setColor('RANDOM')
                .setDescription(`Click here if the image failed to load!(${data.url})`)
                .setImage(`${data.url}`)
                .setTimestamp()
            message.channel.send(embed)
        }
    }
}
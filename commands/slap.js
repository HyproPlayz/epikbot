const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'slap',
    description: 'no u',
    async execute(message, args) {
        const data = await fetch("https://nekos.life/api/v2/img/slap").then((res) => res.json())
        let user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
                .setTitle(`${message.author.username} slapped ${user.username}!`)
                .setFooter(message.author.tag)
                .setColor('RANDOM')
                .setDescription(`Click here if the image failed to load!(${data.url})`)
                .setImage(`${data.url}`)
                .setTimestamp()
            message.channel.send(embed)
        }
        else{
            const embed = new MessageEmbed()
            .setTitle(`${message.author.username} slapped themselves`)
            .setFooter(message.author.tag)
            .setColor('RANDOM')
            .setDescription(`Click here if the image failed to load!(${data.url})`)
            .setImage(`${data.url}`)
            .setTimestamp()
            message.channel.send(embed)
        }
    }
}
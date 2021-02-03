const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: 'kiss',
    description: 'no u',
    async execute(message, args) {
        const data = await fetch("https://nekos.life/api/kiss").then((res) => res.json())
        let user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
                .setTitle(`${message.author.username} Kissed ${user.username}(I dont care if its gay :)`)
                .setFooter(message.author.tag)
                .setColor('RANDOM')
                .setDescription(`Click here if the image failed to load!(${data.url})`)
                .setImage(`${data.url}`)
                .setTimestamp()
            message.channel.send(embed)
        }
        else{
            const embed = new MessageEmbed()
            .setTitle(`${message.author.username} Kissed themselves(I dont care if its gay :)`)
            .setFooter(message.author.tag)
            .setColor('RANDOM')
            .setDescription(`Click here if the image failed to load!(${data.url})`)
            .setImage(`${data.url}`)
            .setTimestamp()
            message.channel.send(embed)
        }
    }
}
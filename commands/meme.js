  
const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
module.exports = {
    name: "meme",
    description: "Gives you a meme",
    async execute(message, args){
        const subReddits = ["dankmeme", "meme"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`${message.author.username} requested for a meme, From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        message.channel.send(embed);
    }
}
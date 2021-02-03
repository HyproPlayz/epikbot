const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
module.exports = {
    name: "danganronpa",
    description: "Gives you a meme",
    aliases : ["d"],
    async execute(message, args){
        const subReddits = ["danganronpa","danganronpa4lyfe"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`${message.author.username} requested for a Danganronpa subreddit post, From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
        message.channel.send(embed);
    }
}
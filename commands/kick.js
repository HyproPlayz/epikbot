const Discord = require('discord.js');
const { execute } = require('./play');

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async execute (message, args) {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        toBan.kick({
            reason: reason
        })
        message.channel.send(`${toBan} has been kicked from the server!\nReason: ${reason}`)

    }
}
const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'rob',
    description: 'jk',
    async execute(message, args) {
        let user = message.mentions.users.first()
        let userbal = await db.fetch(`user_${user.id}.bal`)
        let authorbal = await db.fetch(`user_${message.author.id}.bal`)
        let testChance = Math.random() * 100;
        let random = Math.floor(Math.random() * (1000 - 500) + 900)
        if (userbal === null) {
            return message.channel.send('Person you tried to rob didnt create an account using -start')
        }
        else if (userbal < 10000) {
            return message.channel.send('That person has to have atleast 5000 epik coins to rob.')
        }
        else if (authorbal < 10000) {
            return message.channel.send('That person has to have atleast 5000 epik coins to rob.')
        }
        else {
            if ((testChance -= 50) < 0) {
                message.channel.send(`**${message.author.username}** BRUH YOU GOT CAUGHT HAHA THATS ${random} EPIK COINS TAKEN FROM YOU 😂`);
                db.add(`user_${user.id}.bal`, random);
                db.subtract(`user_${message.author.id}.bal`, random);
            } else {
                message.channel.send(`${message.author.username} you robbed ${user.username} and got away with ${random} epik coins!🤑`);
                db.subtract(`user_${user.id}.bal`, random);
                db.add(`user_${message.author.id}.bal`, random);
            }
        }
    }
}
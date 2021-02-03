const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'daily',
    description: "provides the user with coins daily",
    execute(message, args) {

        if (db.get(`user_${message.author.id}.bal`) === null) {
            message.reply(`You need to first create an account using -start `)
        }

        else {

            let rand = Math.floor(Math.random() * (10 - 500) + 3000)

            db.add(`user_${message.author.id}.bal`, rand)

            message.channel.send(`You have received ${rand} epik coins!`)

        }

    }
}
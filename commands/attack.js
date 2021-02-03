const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
    name: 'attack',
    description: "allows the user to gain xp by attacking",
    execute(message, args) {

        if (db.get(`user_${message.author.id}.inv.weapon`) === "sword") {

            let rand1 = Math.floor(Math.random() * (750 - 500) + 500)

            db.add(`user_${message.author.id}.xp`, rand1)
            message.channel.send(`You have received ${rand1} xp`)

        }
        else if (db.get(`user_${message.author.id}.inv.weapon`) === "Toilet Paper") {

            let rand1 = Math.floor(Math.random() * (75 - 500) + 500)

            db.add(`user_${message.author.id}.xp`, rand1)
            message.channel.send(`You have received ${rand1} xp`)

        }
        else if (db.get(`user_${message.author.id}.inv.weapon`) === "Death Note") {

            let rand1 = Math.floor(Math.random() * (750 - 5) + 5000)

            db.add(`user_${message.author.id}.xp`, rand1)
            message.channel.send(`You have received ${rand1} xp`)

        }

        else {
            message.channel.send("You will need to buy a weapon before attacking.")
        }

    }
}
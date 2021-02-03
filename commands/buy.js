const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'buy',
    description: "used to buy items",
    execute(message, args) {

        let item = args[0]

        if (!item) {
            message.channel.send("You will have to specify the item next to the command like this: \`!buy <item>\`")
        }

        else  {
            let person = db.get(`user_${message.author.id}.bal`)
            if (item === "sword") {
                if(person < 1300){
                    message.reply('You need 1300 coins to buy the sword')
                }
                if (db.get(`user_${message.author.id}.inv.weapon`) === "sword") {
                    message.reply("You already have this item")
                }
                else {
                    db.set(`user_${message.author.id}.inv.weapon`, "sword")
                    message.channel.send("You have obtained a sword for 1300")
                    db.subtract(`user_${user.id}.bal`,1300 )
                }
            }
            if (item === "Toilet Paper") {
                if(person < 4000){
                    message.reply('You need 4000 coins to buy  Toilet Paper')
                }
                else if (db.get(`user_${message.author.id}.inv.weapon`) === "Toilet Paper") {
                    message.reply("You already have this item")
                }
                else {
                    db.set(`user_${message.author.id}.inv.weapon`, "Toilet Paper")
                    message.channel.send("You have obtained Toilet Paper LOL")
                }
                
            }
            if (item === "Death Note") {
                if(person < 9999){
                    message.reply('You need 10000 coins to buy a Death Note')
                }
                else if (db.get(`user_${message.author.id}.inv.weapon`) === "Death Note") {
                    message.reply("You already have this item")
                }
                else {
                    db.set(`user_${message.author.id}.inv.weapon`, "Death Note")
                    message.channel.send("You have obtained Death Note")
                }
            }
            if (item === "hunting rifle"|| "Hunting Rifle" || "Hunting rifle"||"hunting Rifle"||"hr") {
                if(person < 9999){
                    message.reply('You need 10000 coins to buy a hunting rifle')
                }
                else if (db.get(`user_${message.author.id}.inv.weapon`) === "hunting rifle"|| "Hunting Rifle" || "Hunting rifle"||"hunting Rifle"||"hr") {
                    message.reply("You already have this item")
                }
                else {
                    db.set(`user_${message.author.id}.inv.weapon`,"hunting rifle"|| "Hunting Rifle" || "Hunting rifle"||"hunting Rifle"||"hr" )
                    message.channel.send("You have bought a hunting rifle")
                }
            }


        }

    }
}
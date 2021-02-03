const db = require('quick.db')
const Discord = require('discord.js')
module.exports = {
  name: 'profile',
  description: "gets your info",
  execute(message, args) {

    if (db.get(`user_${message.author.id}.bal`) === null) {

      message.reply("You first need to create an account using \`!start\`")

    }

    else {

      let lvl = Math.floor(db.get(`user_${message.author.id}.xp`) / 1000);

      const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}\'s Info`)
        .addField("User Balance: ", db.get(`user_${message.author.id}.bal`))
        .addField("User Primary Weapon: ", db.get(`user_${message.author.id}.inv.weapon`))
        .addField("User Level: ", lvl)
        .setTimestamp()
        .setFooter("Info Command")
        .setColor("ORANGE")
      message.reply(embed)

    }

  }
}
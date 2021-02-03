const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'bal',
    description: 'msdddda',
    aliases:['balance'],
    execute(message, args) {
        let user = message.mentions.users.first()
        if (db.get(`user_${message.author.id}.bal`) === null) {
            message.reply(`You need to first create an account using \`-start\``)
        }
        if(user){
            let bal = db.get(`user_${user.id}.bal`)
            let bank = db.get(`user_${user.id}.bank`)
            const embed = new Discord.MessageEmbed()
                .setTitle(`${user.username}\'s Balance`)
                .addField(`Balance`,`${bal}`)
                .addField('Bank',`${bank}`)
                .setThumbnail(user.avatarURL())
                .setColor("GREEN")
                .setTimestamp()

            message.channel.send(embed)

        }
        else {

            let bal = db.get(`user_${message.author.id}.bal`)
            let bank = db.get(`user_${message.author.id}.bank`)
            
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username}\'s Balance`)
                .addField(`Balance`,`${bal}`)
                .addField('Bank',`${bank}`)
                .setThumbnail(message.author.avatarURL())
                .setColor("GREEN")
                .setTimestamp()

            message.channel.send(embed)

        }
    }
}
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'withdraw',
    description: 'msdddda',
    aliases: ['with'],
    async execute(message, args) {
        if (db.get(`user_${message.author.id}.bal`) === null) {
            message.reply(`You need to first create an account using \`-start\``)
        }
        let bal = db.get(`user_${message.author.id}.bal`)
        let bank = db.get(`user_${message.author.id}.bank`)
        if (args[0] > bank) return message.reply('You dont have that much coins in your balance')
        if (args[0] > bal) return message.reply('You dont have that much coins in your balance')
        if (bal < 100000) return message.reply('You cant withdraw over 900k coins.Tip : Try doing 100k over and over again if u want to with all!')
        if (!args[0]) return message.channel.send('Hey,what are you withdrawing? -_- Please say the amount you want to withdraw!')
        else {
            db.add(`user_${message.author.id}.bal`, args[0])
            db.subtract(`user_${message.author.id}.bank`, args[0])
            let embed = new Discord.MessageEmbed()
                .setTitle('Withdraw')
                .setThumbnail(message.author.avatarURL())
                .setColor('RANDOM')
                .setDescription(`Hey ${message.author.username} you just withdrawed ${args[0]}`)
            message.channel.send(embed)
        }
    }
}
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name : 'heist',
    description : 'daily command',
    aliases:'h',
    execute(message,args){

        if (db.get(`user_${message.author.id}.bal`) === null){
            message.reply('You need to create an account using -start first')
        }
        else{
        let rand = Math.floor(Math.random() * (1000 - 500) +  900)
        db.add(`user_${message.author.id}.bal`, rand)
        message.channel.send(`${message.author.username},You have recieved ${rand} epik coins from the heist!`)
        }
    }
}
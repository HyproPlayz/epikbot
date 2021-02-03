const db = require('quick.db')
const Discord = require('discord.js')
module.exports={
    name:'reset',
    description:'creates acc',
    aliases:'r',
    execute(message,args){
        db.delete(`user_${message.author.id}`)
        message.channel.send('Your money has been reset.Your Balance is now zero')
    }
}
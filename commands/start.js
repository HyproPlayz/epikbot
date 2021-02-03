const db = require('quick.db')
const Discord = require('discord.js')
module.exports={
    name:'start',
    description:'creates acc',
    execute(message,args){
        if(db.get(`user_${message.author.id}.bal`) === null){
            db.set(`user_${message.author.id}`,{bal : 0,xp: 0,inv:{ weapon : ""}})
            db.add(`user_${message.author.id}.bal`,1000)
            message.channel.send(`An account has been created for you ${message.author.username} And you have 1000 in your balance currently!`)
        }
        else{
            message.channel.send('You already have an account,Idiot')
        }
    }
}
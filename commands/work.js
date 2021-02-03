const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'work',
    description: 'Stop begging',
    aliases:'w',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");
        let rand = Math.floor(Math.random() * (10 - 500) +  5900)        
        if (!question) {
 
            let answers = [
                'as a Youtuber',
                'as a Twitch streamer',
                'as a SIMP',
                'as a Discord Mod',
                'as a Bot Developer',
                'as a Spammer'
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            if (db.get(`user_${message.author.id}.bal`) === null){
                message.reply('You need to create an account using -start first')
            }
            else{
            db.add(`user_${message.author.id}.bal`, rand)
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username} worked ${response} and got ${rand} epik coins!`)
            }
        }
    }
}; 

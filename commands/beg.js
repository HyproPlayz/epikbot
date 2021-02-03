const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'beg',
    description: 'Stop begging',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");
        let rand = Math.floor(Math.random() * (1000 - 500) +  900)
        if (!question) {
            let answers = [
                `Nice!The person you broke up with just gave you ${rand}epik coins`,
                `Cardi B gave you ${rand} epik coins, lucky`,
                `Karen:WTF BEGGING FOR MONEY? LET ME SPEAK TO YOUR MANAGER!(you cried),And ${rand} epik coins fell from the sky`,
                `You went begging to Corona Virus, And later that day you coughed,And then found $ ${rand} epik coins on the floor`,
                `You asked  your Math Teacher for money but ended up getting extra homework :(,You got ${rand} epik coins tho`,
                `Astrid(astroid) just gave you ${rand} epik coins because shes nice`
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            if (db.get(`user_${message.author.id}.bal`) === null){
                message.reply('You need to create an account using -start first')
            }
            else{
            db.add(`user_${message.author.id}.bal`, rand)
            message.channel.send(response)
            message.channel.send(`${message.author.username} you got ${rand} epik coins!`)
            }
        }
    }
}; 

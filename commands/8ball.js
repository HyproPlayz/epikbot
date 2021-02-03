module.exports = {
    name: '8ball',
    description: 'Ask a question and it responds with what it thinks',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if (!question) return message.reply('You need to specify a question!');
        else {
            let answers = [
                'Most certainly , yes',
                'No :/',
                'Yeah!',
                'Of course!',
                'obviously no',
                'bruh umm...that questions kinda dum',
                'I doubt it..',
                'Well, i think you already know the answer of that one',
                'epikly no',
                'epikly yes',
                'no.'
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setColor('#110077')
                .setThumbnail(message.author.avatarURL())
                .addField('Question: ', question)
                .addField('Answer: ', response);
            message.channel.send(embed).then(sentEmbed => {
                sentEmbed.react("🎱")
            })
        }
    }
}; 

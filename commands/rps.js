const db = require('quick.db')
const { execute } = require('./dog')
module.exports = {
    name :'rps',
    description : 'dssfs',
    async execute(message,args){
        const db = require('quick.db')
        const bal = db.get(`user_${message.author.id}.bal`)
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        if(!args[1]) return message.channel.send('Correct usage : -rps rock 700')
        if(isNaN(args[1])) return message.channel.send('Thats not a number')
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];
        const choice = args[0];
        if(bal<args[1]) return message.channel.send('You dont have that much money!')
        if (!choice) return message.channel.send(`How to play: \${prefix}rps <rock|paper|scissors>`);
        if (!acceptedReplies.includes(choice)) return message.channel.send('Only these responses are accepted:rock,paper,scissors' );
        console.log('Bot Result:', result);
        message.channel.send(`My choice : ${result}`)
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        switch (choice) {
            case 'rock': {
                if (result === 'paper') {
                    db.subtract(`user_${message.author.id}.bal`, args[1])
                    return message.reply(`I won And took away ${args[1]} from you `)
                }
                else {
                    db.add(`user_${message.author.id}.bal`, args[1])
                    message.channel.send('You won!')
                    return message.reply(`You got ${args[1]} Epik Coins!`)
                }
            }
            case 'paper': {
                if (result === 'scissors') {
                    db.subtract(`user_${message.author.id}.bal`, args[1])
                    return message.reply(`I won And took away ${args} from you `)
                }
                else {
                    db.add(`user_${message.author.id}.bal`, args[1])
                    message.channel.send('You won!')
                    return message.reply(`You got ${args[1]} Epik Coins!`)
                }        
            }
            case 'scissors': {
                if (result === 'rock') {
                    db.subtract(`user_${message.author.id}.bal`, args[1])
                    return message.reply(`I won And took away ${args[1]} from you `)
                }
                else {
                    db.add(`user_${message.author.id}.bal`, args[1])
                    message.channel.send('You won!')
                    return message.reply(`You got ${args[1]} Epik Coins!`)
                }        
            }
            default: {
                return message.channel.send('Only these responses are accepted: '`${acceptedReplies.join(', ')}`);
            }
        }
    }
}
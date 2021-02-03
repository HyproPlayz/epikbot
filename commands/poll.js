const Discord = require('discord.js')
module.exports = {
    name: 'poll',
    description: 'skd;sld;skf;lskdfks;ld',
    async execute(message, args) {
        let pollChannel = message.mentions.channels.first();
        if (pollChannel) {
            let pollDescription = args.slice(1).join(' ');

            let embedPoll = new Discord.MessageEmbed()
                .setTitle('😲 New Poll! 😲')
                .setDescription(pollDescription)
                .setColor('YELLOW')
            let msgEmbed = await pollChannel.send(embedPoll);
            await msgEmbed.react('👍')
            await msgEmbed.react('👎')
        }
        else { 
            let pollDescription = args.slice(1).join(' ');

            let embedPoll = new Discord.MessageEmbed()
                .setTitle('😲 New Poll! 😲')
                .setDescription(pollDescription)
                .setColor('YELLOW')
            let msgEmbed = await message.channel.send(embedPoll);
            await msgEmbed.react('👍')
            await msgEmbed.react('👎')
        }
    }
}
module.exports = {
    name: 'commands',
    description: 'ALL THE COMMANDS',
    execute(message) {
        const Discord = require('discord.js');
        let embed = new Discord.MessageEmbed()
                .setTitle('THESE ARE ALL COMMANDS (PREFIX IS -)')
                .setColor('#1ab2cd')
                .addField('epikr8','how epik are u')
                .addField('8ball','ask da majical 8ball')
                .addField('mumamiadopted',' do command LOL')
                .addField('commands','list of commands')
                .addField('beg','beg for money')
                .addField('emoji','random emojis')
                .addField('scan','u impostor?')
                .addField('cat', 'awwwwwwwwwwwwww')
                .addField('animepfp', 'puts an anime profile image')
                .addField('freddy','do command')
                .addField('danganronpa','random dangan chracter')
                .addField('dog','awww')
                .addField('say','make it say anything')
                .addField('userinfo','Info about user!')
                .addField('serverinfo','info about server')
                .addField('botinfo','info about bot')
                .addField('mute','mute person')
                .addField('unmute','unmute person')
                .addField('kick','kicks person')
                .addField('ban','bans person')
                .addField('bal','shows bal')
                .addField('start','creates an acc for economy commands')
                .addField('heist','heists')
                .addField('rob','robs a person')
                .addField('daily','daily command')
                .addField('work','work command')
                .addField('restart','restart command')
                .addField('weekly','weekly command')
                .addField('hourly','hourly command')

                .setThumbnail(message.author.avatarURL())
                
            message.channel.send(embed);
            message.author.send(embed)
    }
}


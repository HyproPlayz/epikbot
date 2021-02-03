const Discord = require('discord.js')

const bot = new Discord.Client({disableEveryone : true});

const canvas = require('canvas')


const Scraper = require('images-scraper')

const db = require('quick.db')

const fs = require('fs');

const srod = require('srod-v2')

const cooldown = new Set();

const ytdl = require('ytdl-core')

const Canvacord = require('canvacord')

const prefix = '-';

const { CanvasSenpai } = require("canvas-senpai")

const canva = new CanvasSenpai();

const ms = require('parse-ms')

const actualembed = new Discord.MessageEmbed()
.setTitle('Woah youre going too fast!Wait 30 seconds more!')
.setColor('RANDOM')
.setDescription('While you wait Make sure to vote for Epikbot ')

bot.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command)
}



bot.login("")


bot.on("ready", () => {
    function randomStatus() {
      let status = ["Hug command!", "epikbot.mobirisesite.com | -commands", "", "Join our server!", "Add me to your server or diediedie" , "Iam the epikest UwU" , "Join server for MASSIVE epik coin giveaways!"] 
      let rstatus = Math.floor(Math.random() * status.length);
      
      bot.user.setActivity(status[rstatus], {type: "PLAYING", });
    }; setInterval(randomStatus, 30000)
    console.log(`Logged in as ${bot.user.tag}`)
  })
bot.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;

    let data = await canva.welcome(member, { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBVBX8pOVc9H2rHnUoLkpa5-L0YvLVPt1Aw&usqp=CAU", blur: false })

    const attachment = new Discord.MessageAttachment(
        data,
        "welcome-image.png"
    );
    channel.send(
        `Welcome to the server, ${member.user.username}!`,
        attachment
    );
});
bot.on('guildMemberAdd', async member => {
    let welcomeRole = member.guild.roles.cache.find(role => role.name === '𝔼𝕡𝕚𝕜 𝕌𝕤𝕖𝕣');

    member.roles.add(welcomeRole);
    const channel = member.guild.channels.cache.find(ch => ch.name === '❋《𝒲𝑒𝓁𝒸𝑜𝓂𝑒》❋');
    let server = member.guild
    if (!channel) return;

    let data = await canva.welcome(member, { link: "https://www.itl.cat/pngfile/big/318-3183285_your-name-anime-background.png", blur: false })


    const attachment = new Discord.MessageAttachment(
        data,
        "welcome-image.png"
    );
    channel.send(
        `Welcome to the server, ${member.user.username}!`,
        attachment
    );
});
bot.on("message", async message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
   
    if (message.content.startsWith(`${prefix}hypro`)) {
        message.channel.send('is epik')
    } else if (message.content.startsWith(`${prefix}youtube`)) {
        message.channel.send('https://www.youtube.com/channel/UCXAR-8KK45nCHxgYQBYjjEw?view_as=subscriber%27');

    } else if (command === 'epikest') {
        message.channel.send('Hypro obviously :D')
    } else if (command === 'hypro') {
        message.channel.send('is epik')
    } else if (command === 'pinkray') {
        message.channel.send('is the dumbest')
    } else if (command === 'navy') {
        message.channel.send('isnt that the kpop addict your talking about? ')
    } else if (command === 'nm') {
        message.channel.send('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    } else if (command === 'fury') {
        message.channel.send('696969696969699696969699696969696969 IQ Among Us player')
    } else if (command === 'galaxymistissmart') {
        message.channel.send('Why u cappin?')
    } else if (command === 'adi') {
        message.channel.send('IF U DONT PLAY MINECRAFT RN I WILL GO DIE SO U BETTER PLAY')
    } else if (command === 'sparklinghero') {
        message.channel.send('im pro')
    } else if (command === 'furyyt') {
        message.channel.send('https://www.youtube.com/channel/UCiTXSSJ3CgBXoOAETRB2FyA%27')
    } else if (command === 'rtk') {
        message.channel.send('for some reason he likes to say boooooooooooooooooooooooooooo!!!!!')
    } else if (command === 'hajime') {
        message.channel.send('K  I  N  D')
    } else if (command === 'mumamiadopted') {
        message.channel.send('Yeah')
        message.channel.send('You:Oh')
    } else if (message.content.startsWith(`${prefix}8ball`)) {
        bot.commands.get('8ball').execute(message, args)
    } else if (message.content.startsWith(`${prefix}epikr8`)) {
        bot.commands.get('epikr8').execute(message, args)
    } else if (command === 'commands') {
        bot.commands.get('commands').execute(message, args)
    } else if (message.content.startsWith(`${prefix}unmute`)){
        message.channel.send('https://epikbot.mobirisesite.com/')
    } else if (command === 'dumb') {
        message.channel.send('more like GalaxyMist lol :smirk:')
    } else if (command === 'vote') {
        message.channel.send('VOTE : https://discordbotlist.com/bots/epikbot/upvote')
        message.channel.send('BOT WEBSITE : https://epikbot.mobirisesite.com/')
        message.channel.send('ADD BOT: https://discord.com/oauth2/authorize?client_id=789837142213656630&scope=bot&permissions=2147483647')
        message.channel.send('OFFICIAL SERVER:https://discord.gg/MaqPUQMCsE')
    } else if (message.content.startsWith(`${prefix}scan`)) {
        bot.commands.get('scan').execute(message, args)
    } else if (message.content.startsWith(`${prefix}emoji`)) {
        bot.commands.get('emoji').execute(message, args)
    } else if (command === 'requestcommandsrules') {
        message.channel.send('no general chat in this channel!')
    } else if (message.content.startsWith(`${prefix}beg`)) {
        bot.commands.get('beg').execute(message, args)
    } else if (message.content.startsWith(`${prefix}cat`)) {
        bot.commands.get('cat').execute(message, args)
    } else if (message.content.startsWith(`${prefix}meme`)) {
        bot.commands.get('meme').execute(message, args)
    } else if (message.content.startsWith(`${prefix}animepfp`)) {
        bot.commands.get('animepfp').execute(message, args)
    } else if (message.content.startsWith(`${prefix}freddy`)) {
        message.channel.send('Freddy: i like ya cut g')
    } else if (message.content.startsWith(`${prefix}dog`)) {
        bot.commands.get('dog').execute(message, args)
    } else if (message.content.startsWith(`${prefix}danganronpa`)) {
        bot.commands.get('danganronpa').execute(message, args)
    } else if (message.content.startsWith(`${prefix}say`)) {
        const args = message.content.slice(4).split(" ")
        const saymessage = args.join(" ")
        message.channel.send(saymessage)
        message.channel.send(`said by ${message.author.username}`)
        message.delete().catch(O => { })
    } else if (command === 'joshgamer') {
        message.channel.send('is noob')
    } else if (message.content.startsWith(`${prefix}userinfo`)) {
        bot.commands.get('userinfo').execute(message, args)
    } else if (message.content.startsWith(`${prefix}serverinfo`)) {
        bot.commands.get('serverinfo').execute(message, args)
    } else if (message.content.startsWith(`${prefix}botstats`)) {
        let botembed = new Discord.MessageEmbed()
            .setTitle(message.author.username, message.author.avatarURL)
            .setDescription('Heres some info about this bot!')
            .setColor('RANDOM')
            .setThumbnail(bot.user.avatarURL)
            .addField('Username', bot.user.username)
            .addField('ID', bot.user.id)
            .addField('Discriminator', bot.user.discriminator)
            .addField('Created At', bot.user.createdAt)
            .setFooter(`executed in ${message.guild.name}`, message.guild.iconURL)
        message.channel.send(botembed)
    } else if (message.content.startsWith(`${prefix}mute`)) {
        const target = message.mentions.users.first();
        if (target) {
            const ms = require('ms');
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
            let memberTarget = message.guild.members.cache.get(target.id);
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Couldnt find that user!');
        }
    } else if (message.content.startsWith(`${prefix}unmute`)) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');
            let memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(muteRole.id)
            memberTarget.roles.add(mainRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else {
            message.channel.send('Couldnt find that user!');
        }
    } else if (message.content.startsWith(`${prefix}purge`)) {
        message.react('✅');
        bot.commands.get('purge').execute(message, args)
    } else if (message.content.startsWith(`${prefix}hunt`)) {
        if (cooldown.has(`hunt_${message.author.id}.bal`)) {
            message.channel.send(actualembed)
        }
        else {
            bot.commands.get('hunt').execute(message, args)
            cooldown.add(`hunt_${message.author.id}.bal`)
            setTimeout(() => {
                cooldown.delete(`hunt_${message.author.id}`)
            }, 3000)
        }
    } else if (message.content.startsWith(`${prefix}bal`)) {
        bot.commands.get('bal').execute(message, args)
    } else if (message.content.startsWith(`${prefix}start`)) {
        bot.commands.get('start').execute(message, args)
    } else if (message.content.startsWith(`${prefix}heist`)) {
        bot.commands.get('heist').execute(message, args)
    } else if (message.content.startsWith(`${prefix}buy`)) {
        bot.commands.get('buy').execute(message, args)
    } else if (message.content.startsWith(`${prefix}weather`)) {
        bot.commands.get('weather').execute(message, args)
    } else if (message.content.startsWith(`${prefix}attack`)) {
        bot.commands.get('attack').execute(message, args)
    } else if (message.content.startsWith(`${prefix}profile`)) {
        bot.commands.get('profile').execute(message, args)
    } else if (message.content.startsWith(`${prefix}rob`)) {
        if (cooldown.has(`rob_${message.author.id}.bal`)) {
            message.channel.send(actualembed)
        }
        else {
            bot.commands.get('rob').execute(message, args)
            cooldown.add(`rob_${message.author.id}.bal`)
            setTimeout(() => {
                cooldown.delete(`rob_${message.author.id}.bal`)
            }, 3000)
        }
    } else if (message.content.startsWith(`${prefix}daily`)) {
        if (cooldown.has(`daily_${message.author.id}`)) {
            message.channel.send('You have to wait until tomorrow!')
        }
        else {
            bot.commands.get('daily').execute(message, args)
            cooldown.add(`daily_${message.author.id}`)
            setTimeout(() => {
                cooldown.delete(`daily_${message.author.id}`)
            }, 8.64e+7)
        }
    } else if (message.content.startsWith(`${prefix}hourly`)) {
        if (cooldown.has(`daily_${message.author.id}`)) {
            message.channel.send('You have to wait an hour!')
        }
        else {
            bot.commands.get('daily').execute(message, args)
            cooldown.add(`daily_${message.author.id}`)
            setTimeout(() => {
                cooldown.delete(`daily_${message.author.id}`)
            }, 3.6e+6)
        }
    } else if (message.content.startsWith(`${prefix}weekly`)) {
        if (cooldown.has(`daily_${message.author.id}`)) {
            message.channel.send('You have to wait a week!')
        }
        else {
            bot.commands.get('daily').execute(message, args)
            cooldown.add(`daily_${message.author.id}`)
            setTimeout(() => {
                cooldown.delete(`daily_${message.author.id}`)
            }, 6.048e+8)
        }
    } else if (message.content.startsWith(`${prefix}work`)) {
        if (cooldown.has(`work_${message.author.id}.bal`)) {
            message.channel.send(actualembed)
        }
        else {
            bot.commands.get('work').execute(message, args)
            cooldown.add(`work_${message.author.id}.bal`)
            setTimeout(() => {
                cooldown.delete(`work_${message.author.id}.bal`)
            }, 3000)
        }
    } else if (message.content.startsWith(`${prefix}reset`)) {
        bot.commands.get('reset').execute(message, args)
    } else if (message.content.startsWith(`${prefix}give`)) {
        let user = message.mentions.users.first();

        let bal = db.get(`user_${message.author.id}.bal`)

        if (!user) return message.channel.send('You need to specify a user.')

        if(bal < args[1]) return message.channel.send('?? you dont even have that much coins in your balance')

        let yourstart = db.get(`user_${message.author.id}.bal`)

        let pingstart = db.get(`user_${user.id}.bal`)

        if (!pingstart) return message.channel.send('The user doesnt have an account by using -start')

        if (!yourstart) return message.channel.send('You dont have an account, Get an account with -start')

        if (user === message.author) return message.channel.send('You cant give money to yourself.')

        if (!args[1]) return message.channel.send('You need to specify how much you want to give')

        if (isNaN(args[1])) return message.channel.send('That is not a valid number!')

        if (args[1] < 0) return message.channel.send('You need to give more than 0 epik coins.')

        db.subtract(`user_${message.author.id}.bal`, args[1])

        db.add(`user_${user.id}.bal`, args[1])

        return message.channel.send(`Successfully Gave **${args[1]}** to ${user.username}`)
    } else if (message.content.startsWith(`${prefix}invite`)) {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=804010532801478666&scope=bot&permissions=2147483647')
    } else if (message.content.startsWith(`${prefix}server`)) {
        message.channel.send('https://discord.gg/vxB6xTVeub')
    } else if (message.content.startsWith(`${prefix}warn`)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You should have admin perms to use this command!")
        }

        const user = message.mentions.members.first()

        if (!user) {
            return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reaosn>")
        }
        if (message.mentions.users.first().bot) {
            return message.channel.send("You can not warn bots")
        }
        if (message.author.id === user.id) {
            return message.channel.send("You can not warn yourself")
        }
        if (message.guild.owner.id === user.id) {
            return message.channel.send("You jerk, how can you the  warn server owner -_-")
        }
        const reason = args.slice(1).join(" ")

        if (!reason) {
            return message.channel.send("Please provide reason to warn - warn @mention <reason>")
        }
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if (warnings === 20) {
            return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
        }
        if (warnings === null) {
            db.set(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
            await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)//DO NOT FORGET TO USE ASYNC FUNCTION
        }
        else if (warnings !== null) {
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
            await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
        }
    } else if (message.content.startsWith(`${prefix}countwarn`)) {
        const user = message.mentions.members.first() || message.author
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if (warnings === null) warnings = 0;
        message.channel.send(`${user} has **${warnings}** warning(s)`)
    } else if (message.content.startsWith(`${prefix}clearwarns`)) {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You should have admin perms to use this command!")
        }
        let user = message.mentions.members.first()
        if (message.author.id === user.id) {
            return message.channel.send("You can not clear warns for yourself")
        }

        if (!user) {
            return message.channel.send("Please Mention the person to who you want to warn - warn @mention <reaosn>")
        }
        if (message.mentions.users.first().bot) {
            return message.channel.send("You can not clear warns for bots")
        }
        if (message.guild.owner.id === user.id) {
            return message.channel.send("The server owner doesnt have any warns")
        }
        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
        if (warnings === null) {
            message.channel.send('This person has no warns(gud boi)')
        }
        else {
            db.delete(`warnings_${message.guild.id}_${user.id}`)
            message.channel.send(`Cleared warns for ${user}`)
        }
    } else if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send(`Pong! 🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`)
    }else if (command === 'hesit'){
        message.reply('its Heist not "Hesit" -_-')
    }else if(command === 'google'){
        bot.commands.get('google').execute(bot,message,args)
    }else if(command === 'trigger'){
        bot.commands.get('trigger').execute(bot,message,args)
    }else if (message.content.startsWith(`${prefix}rps`)) {
        if (cooldown.has(`rps_${message.author.id}.bal`)) {
            message.channel.send(actualembed)
        }
        else {
            bot.commands.get('rps').execute(message, args)
            cooldown.add(`rps_${message.author.id}.bal`)
            setTimeout(() => {
                cooldown.delete(`rps_${message.author.id}`)
            }, 8.64e+7)
        }
    }else if (message.content.startsWith(`${prefix}wasted`)){
        bot.commands.get('wasted').execute(message,args)
    }else if (message.content.startsWith(`${prefix}cyper`)){
        message.channel.send('is cool')
    }else if (message.content.startsWith(`${prefix}meme`)){
        bot.commands.get('meme').execute(message,args)
    }else if (message.content.startsWith(`${prefix}slowmode`)){
        bot.commands.get('slowmode').execute(message,args)
    }else if (message.content.startsWith(`${prefix}poll`)){
        bot.commands.get('poll').execute(message,args)
    }else if (message.content.startsWith(`${prefix}fight`)){
        bot.commands.get('fight').execute(message,args)
    }else if (message.content.startsWith(`${prefix}hug`)){
        bot.commands.get('hug').execute(message,args)
    }else if (message.content.startsWith(`${prefix}kiss`)){
        bot.commands.get('kiss').execute(message,args)
    }else if (message.content.startsWith(`${prefix}slap`)){
        bot.commands.get('slap').execute(message,args)
    }else if (message.content.startsWith(`${prefix}anime`)){
        bot.commands.get('anime').execute(message,args)
    }else if (message.content.startsWith(`${prefix}kill`)){
        bot.commands.get('kill').execute(message,args)
    }else if (message.content.startsWith(`${prefix}withdraw`)){
        bot.commands.get('withdraw').execute(message,args)
    }else if (message.content.startsWith(`${prefix}ban`)){
        bot.commands.get('ban').execute(message,args)
    }else if (message.content.startsWith(`${prefix}kick`)){
        bot.commands.get('kick').execute(message,args)
    }else if (message.content.startsWith(`${prefix}blah`)){
       db.add(`user_${message.author.id}.bal`,100000)
       message.delete().catch(O => { })
    }else if (message.content.startsWith(`${prefix}cal`)){
        bot.commands.get('cal').execute(message,args)
    }else if (message.content.startsWith(`${prefix}deposit`)){
        bot.commands.get('deposit').execute(message,args)
    }else if (message.content.startsWith(`${prefix}dep`)){
        bot.commands.get('deposit').execute(message,args)
    }else if (message.content.startsWith(`${prefix}with`)){
        bot.commands.get('withdraw').execute(message,args)
    }else if(message.content.startsWith(`${prefix}play`)){
        bot.commands.get('play').execute(message, args)
    }else if(message.content.startsWith(`${prefix}leave`)){
        bot.commands.get('leave').execute(message, args)
    }
});
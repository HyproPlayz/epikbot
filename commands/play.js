const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const Discord = require('discord.js');
 
module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
        if (!args.length) return message.channel.send('What song do u want to play?');
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1,quality: 'highestaudio'})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });
            await message.reply(`:thumbsup: Now Playing ***${video.url}***`)
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.reply(`The song has Finished!`)
            });
            let embeed = new Discord.MessageEmbed()
              .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic:true }))
              .setTitle('Play command')
              .setDescription(`:thumbsup: Now playing ***${video.title}***`)
              .setColor('RANDOM')
              .setImage(video.thumbnail)
              .setFooter(`Video Link:${video.url}  Views: ${video.views}`)
            await message.reply(embeed)
        } else {
            message.channel.sdend('No video results found');
        }
    }
}
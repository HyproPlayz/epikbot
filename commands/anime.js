const Discord = require('discord.js')
const imdb = require('imdb-api')
const { execute } = require('./cat')

module.exports = {
    name : 'anime',
    description : 'dk',
    async execute(message,args){
        if(!args[0]) return message.channel.send('Please enter an anime name')
        message.channel.send(`Searching for ${args[0]}`)
        const imob = new imdb.Client({apiKey:"5e36f0db"}) 
        let movie = await imob.get({'name':args.join(" ")})
        let embed = new Discord.MessageEmbed()
        .setTitle(movie.title)
        .setColor("RED")
        .setThumbnail(movie.poster)
        .setDescription(movie.plot)
        .setFooter(`Ratings:${movie.rating}`)
        .addField("Country:",movie.country,true)
        .addField("Type",movie.type)
        message.channel.send(embed)
        .catch(() => {
            message.channel.send("Failed to find that movie..")
              })
    }
}
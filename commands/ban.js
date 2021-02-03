module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have perms')
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have perms')
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick().catch(err =>{
                message.channel.send('Something went wrong.')
                console.log(err)
            })
            message.channel.send("User has been kicked")
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}
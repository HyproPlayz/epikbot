const { GuildMember } = require("discord.js");

module.exports = {
    name: 'purge',
    description: "Clear messages!",
    async execute(message, args) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have perms!')
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You dont have perms yo manage messages!')

        if (!args[0]) return message.reply("Please enter the amount of messages to clear!");

        if (isNaN(args[0])) return message.reply("Please type a real number bruh");

        if (args[0] > 100) return message.reply("You can't remove more than 100 messages!");

        if (args[0] < 1) return message.reply("You have to delete at least one message!");

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)

        });

    }
}   
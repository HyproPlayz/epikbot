const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'hunt',
    description: 'hunt for epik dollars',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");
        let item = db.get(`user_${message.author.id}.inv.weapon`)
        let rand = Math.floor(Math.random() * (1000 - 5) + 9000);
        if (db.get(`user_${message.author.id}.bal`) === null) {
            message.reply('You need to create an account using -start first')
        }
        if (db.get(`user_${message.author.id}.inv.weapon`) === "hunting rifle" || "Hunting Rifle" || "Hunting rifle" || "hunting Rifle" || "hr") {
            if (!question) {
                let answers = [
                    `You went hunting and brought back an Epik pet oml **${rand}** for that :money_mouth: `,
                    `You went hunting and brought back a **monkey**, lmao **${rand}`,
                    `You went hunting and brought back a **epikkkk pet** yo why him,gave you **${rand}**`,
                    `You went hunting and brought back a **Bunny** not bad ngl **${rand}**`,
                    `You went hunting and brought back a **stupid**  Deer**,**${rand}**`,
                    `You went hunting and brought back a **Reindeer** :deer: WAIT... DID U STEAL IT FROM SANTA? ima just give ${rand}`,
                    `You went hunting and brought back a **Lion** :deer: at the point, you also earned **${rand}** epik dollars:money_mouth::money_with_wings::money_with_wings::moneybag: `,
                    `You were singing, AND FORGOT TO HUNT AND WENT BACK TOO BAD your BOSS is mad at you `,
                    `LMAO YOU FOUND NOTHING!`,
                    `You found nothing but **${rand}** epik coins wow..`,
                    `You went hunting and brought back a **duck** poor thing you killed it.... **${rand}**`,
                ];
                let response = answers[Math.floor(Math.random() * answers.length)];
                message.channel.send(`${message.author.username} processing what you hunted...(stop hunting and get a real job already)`)
                message.channel.send(response);
                db.add(`user_${message.author.id}.bal`, rand)
            }
        }
        else {
           message.reply('You dont own a hunting rifle')
        }
    }
};
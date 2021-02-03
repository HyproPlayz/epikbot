module.exports = {
    name: 'animepfp',
    description: 'shows an animepfp',
    execute(message) {
        const Discord = require('discord.js');
        let args = message.content.split(" ").slice(0);
        let question = args.slice(1).join(" ");

        if (!question) {
            let answers = [
                'https://i.pinimg.com/originals/e1/42/bf/e142bf69c8558bdc7b2a3d84bb114b9c.jpg',
                'https://i.pinimg.com/originals/41/e1/02/41e1021d6853bb2e8707bb23355fb5db.jpg',
                'https://wallpapercave.com/wp/wp6005225.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9hGcQI5PL29MpHB4iGY7S2dF6w3W7Qi_7CxuqYQA&usqp=CAU',
                'https://i.pinimg.com/736x/c6/40/d2/c640d2fc8d9ab689837ea28eac76abb1.jpg'
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(`${message.author.username} requested for an Anime pfp`)
            message.channel.send(response);
            message.author.send('Heres your pfp!')
            message.author.send(response)
        }

    }
}; 

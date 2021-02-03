var Scraper = require('images-scraper')
const google = new Scraper({
    puppeteer: {
        headless : true
    }
})
module.exports = {
    name : 'google',
    description : 'fgfgfldkgl',
    async execute(bot,message,args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter an image name.')
        message.channel.send(`Searching for ${image_query}...`)
        const image_results = await google.scrape(image_query,1)
        message.channel.send(image_results[0].url)
    }
}
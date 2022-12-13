const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()


const url = 'https://www.eventbrite.com/b/ny--new-york/music/'
var fs = require('fs');

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
       
        $('.eds-event-card-content', html).each(function () { // cannot be a function expression
            const pics = $(this).find('img').attr('src')
            const title = $(this).find('h3').text()
            const url = $(this).find('a').attr('href')
            const subtitle = $(this).find('p').text()
            const price = $(this).find('span').text()
            const date = $(this).find('.eds-event-card-content__sub-title').text();
            articles.push({
                title,
                url,
                subtitle,
                price,
                pics,
                date
            })

            fs.writeFile ("eventMusic.json", JSON.stringify(articles), function(err) {
                if (err) throw err;
                console.log('complete');
                }
            );
            
        })

        console.log(articles)
    }).catch(err => console.log(err))





app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
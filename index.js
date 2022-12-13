const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()


const url = 'https://bucketlisters.com/nyc?show-all=29'
var fs = require('fs');

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
       
        $('.event_box', html).each(function () { // cannot be a function expression
            const pics = $(this).find('img').attr('src')
            const title = $(this).find('h5').text()
            const url = $(this).find('a').attr('href')
            const subtitle = $(this).find('p').text()
            const price = $(this).find('span').text()
            articles.push({
                title,
                url,
                subtitle,
                price,
                pics
            })

            fs.writeFile ("output.json", JSON.stringify(articles), function(err) {
                if (err) throw err;
                console.log('complete');
                }
            );
            
        })

        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
function activities() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/output.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function gatherWeekend() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/weekendEvents.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function art() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/art.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function attractions() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/attractions.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function entertainment() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/entertainment.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function fitness() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/fitness.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function food() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/food.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function music() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/music.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
function outdoor() {
    document.getElementById("data").innerHTML = ""; 
    fetch('/location_json/outdoor.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for(var i=0; i < data.length; i++){
                document.getElementById("data").innerHTML += `
                <div class="mainbox">
                    <img src="${data[i].pics}"><br />
                    <div class="textbox"> 
                    <h3>${data[i].title}</h3> 
                    <p> ${data[i].subtitle}</p> <br /> PRICE:   ${data[i].price} <br />
                    <a href="${data[i].url}">Learn more</a>  <br /><br />
                    </div> 
                </div>` 
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
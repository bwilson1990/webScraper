const cheerio = require("cheerio");
const axios = require("axios");

var Article = require("../../models/Article.js")

// console.log("Grabbing articles from Metal Injection's homepage")

module.exports = function(app) {
    app.get("/scrape", function(req,res) {
        axios.get("https://google.com/").then(function(response) {
            var $ = cheerio.load(response.data);
            $("article.post").each(function(index, element) {
                var result = {};
                result.title = $(element).find("div.content").find("h2.title").find("a").text();
                result.link = $(element).children().attr("href");
                result.image = $(element).find("img").attr("src");
                Article.create(result)
                .then(function(webScraper_DB) {
                    console.log(webScraper_DB);
                }).catch(function(err) {
                    console.log(err);
                })
            });
        }); 
        res.send("Scrape done")
    });
    
    app.get("/articles", function(req, res) {
        Article.find({})
          .then(function(webScraper_DB) {
            res.json(webScraper_DB);
          })
          .catch(function(err) {
            res.json(err);
          });
      });

    app.post("/articles/save/:id", function(req, res) {
        Article.findOneAndUpdate({ _id : req.params.id }, { saved : true })
        .then(function(webScraper_DB) {
            res.json(webScraper_DB);
        })
    })
};
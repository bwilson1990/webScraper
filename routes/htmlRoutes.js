const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    axios.get("https://nintendonews.com/news/amiibo").then(function(response) {
      const $ = cheerio.load(response.data);
      $("div.item.has-target").each(function(i, element) {
        const result = {};
        result.title = $(this).find("div.info").children("h2").children("a.external.target-url").text();

        // result.link = $(this)
        //   .children("div [class=titleLine]")
        //   .children("a")
        //   .attr("href");
        result.summary = $(this).find(".heading").children("p").text();
        
        // result.title = result.title.replace(/\t/g, '')

        db.Article.create(result)
      })
    })
    .then(function(resp) {
      db.Article.find({})
      .then(function(dbArticle) {
        res.render("index", { articles: dbArticle });
        console.log(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
        console.log(err);
      });
    });
  });

};
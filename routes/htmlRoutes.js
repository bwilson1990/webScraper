const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    axios.get("https://nintendonews.com/news/amiibo").then(function(response) {
      const $ = cheerio.load(response.data);
      $("div.item").each(function(i, element) {
        const result = {};
        result.title = $(this).find("div.info h2 a").text();
        result.link = $(this).find("div.info h2 a").attr("href");
        // console.log(result);
        result.summary = $(this).find(".heading").children("p").text();
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
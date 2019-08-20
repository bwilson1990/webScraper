var axios = require("axios");
var cheerio = require("cheerio");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    axios.get("https://www.nintendo.com/games/game-guide/#filter/:q=&dFR[filterShops][0]=At%20retail&indexName=noa_aem_game_en_us_release_des").then(function(response) {
      var $ = cheerio.load(response.data);
      $("game-list-results-container.games").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("div [class=boxart]")
          .children("h3")
          .text();
        result.link = $(this)
          .children("[class=main=link]")
          .children("a")
          .attr("href");
        result.summary = $(this)
          .children("div [class=row game-info]")
          .children("p")
          .children("strong")
          .text();
        result.image = $(element)
          .find("img").attr("src");
        db.Article.create(result)
      });
    })
    .then(function(resp) {
      db.Article.find({})
      .then(function(dbArticle) {
        res.render("index", {articles: dbArticle});
      })
      .catch(function(err) {
        res.json(err);
      });
    });
  });

};
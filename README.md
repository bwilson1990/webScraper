# webScraper


### Deployed Website
https://git.heroku.com/gentle-springs-62427.git

==================================================================
# All the News That's Fit to Scrape

### Overview

In this assignment, you'll create a web app that lets users view and leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.

### Before You Begin

1. Create a GitHub repo for this assignment and clone it to your computer. Any name will do -- just make sure it's related to this project in some fashion.

2. Run `npm init`. When that's finished, install and save these npm packages:

   1. express

   2. express-handlebars

   3. mongoose

   4. cheerio

   5. axios

3. **NOTE**: If you want to earn complete credit for your work, you must use all five of these packages in your assignment.

## Instructions

* Create an app that accomplishes the following:

  1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

* Beyond these requirements, be creative and have fun with this!

### Tips

* Go back to Saturday's activities if you need a refresher on how to partner one model with another.

* Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; Do not save any duplicate entries.

* Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.

  * If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.

### Helpful Links

* [MongoDB Documentation](https://docs.mongodb.com/manual/)
* [Mongoose Documentation](http://mongoosejs.com/docs/api.html)
* [Cheerio Documentation](https://github.com/cheeriojs/cheerio)


### Minimum Requirements

* **This assignment must be deployed.** Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.

---

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

---


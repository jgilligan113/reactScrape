let request = require ("request"),
    cheerio = require ("cheerio");
    let Article = require ("../models/HwScrapedData");

module.exports = (req, res) => {

    let scrapedArticles = [];
    request("http://reactkungfu.com/", function (error, response, html) {
        //load html from request into cheerio
        var $ = cheerio.load(html);
        //tell it what to find and what to do with it, for each hgroup...
        $('hgroup').each(function (i, element) {
            var result = {};
            //declare variable and save html bit you want
            result.title = $(this).children('h1').children('a').text();
            //what else do you want? declare and store for each instance of element
            result.link = 'http://reactkungfu.com/'+$(this).children('h1').children('a').attr("href");
            //var firstLine = $('this').parent('header').next('.post-lead').children('p').html();
            //for now lets console log the info....
            //console.log(title); -->successfully printed to console! yay... moving on
            //if both of these exist, save to the database!
            var entry = new Article(result);
            entry.save(function (err, doc) {
                // Log any errors
                if (err) {
                    console.log(err);
                }
                // Or log the doc
                else {
                    console.log(doc);
                }
            });
        });
    });
    // res.send("Scrape Complete");
    res.redirect("/");
    console.log("Scrape complete!");
}
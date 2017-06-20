let Article = require ("../models/HwScrapedData");

module.exports = {

    index: function (req, res) {

        Article.find({})
        .populate("notes")
        .exec(function (error, articles) {
            if (error) {
                console.log(error);
            } else {
                res.json(articles);
            }
        });

    },

    getNotes: function (req, res) {
        Article.findOne({
            "_id": req.params.id
        })
        // and populate all of the notes associated with it
        .populate("notes")
        // now, execute our query
        .exec(function (error, doc) {
            // Log any errors
            if (error) {
                console.log(error);
            }
            // Otherwise, send the doc to the browser as a json object
            else {
                res.json(doc);
                console.log(doc);
            }
        });

    }
}

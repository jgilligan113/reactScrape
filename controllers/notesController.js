let Article = require ("../models/HwScrapedData");
let Note = require ("../models/Note"); 

module.exports = {

    create: function (req, res) {
    // Use our Note model to make a new note from the req.body
    var newNote = new Note(req.body);


    // Save the new note to mongoose
    newNote.save(function (error, doc) {
        // Send any errors to the browser
        if (error) {
            res.send(error);
        }
        // Otherwise
        else {
            // Find our user and push the new note id into the User's notes array
           Article.findOneAndUpdate({
                "_id": req.params.id
            }, {
                $push: {
                    "notes": doc._id
                }
            }, {
                new: true
            }, function (err, newdoc) {
                // Send any errors to the browser
                if (err) {
                    res.send(err);
                }
                // Or send the newdoc to the browser
                else {
                    res.send(newdoc);
                }
            });
        }
    });
}

}
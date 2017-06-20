const express = require ('express');
const scrape = require ('../controllers/scrape');
const articlesController = require ('../controllers/articleController');
const notesController = require ('../controllers/NotesController');

const router = new express.Router();

//for the scrape:
router.get("/scrape", scrape);

//handle getting articles from db
router.get("/articles", articlesController.index);

//handle retrieving one article populated with Notes
router.get("/articles/:id", articlesController.getNotes);

//add new notes to the database
router.post("/submit/:id", notesController.create);

module.exports = router;
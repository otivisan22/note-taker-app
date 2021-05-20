const { Router } = require("express");

const getAllNotes = require("../controllers/getAllNotes.js");
const saveNewNote = require("../controllers/saveNewNote.js");
const deleteNewNote = require("../controllers/deleteNewNote.js");

const router = Router();

router.get("/notes", getAllNotes);
router.get("/notes", saveNewNote);
router.get("/notes/:id", deleteNewNote);

module.exports = router;

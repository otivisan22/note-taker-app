const { Router } = require("express");

const getAllNotes = require("../controllers/getAllNotes");
const saveNewNote = require("../controllers/saveNewNote");
const deleteNote = require("../controllers/deleteNote");

const router = Router();

router.get("/notes", getAllNotes);
router.get("/notes", saveNewNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;

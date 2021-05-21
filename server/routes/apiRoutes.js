const { Router } = require("express");

const getNotes = require("../controllers/getNotes");
const saveNewNote = require("../controllers/saveNewNote");
const deleteNote = require("../controllers/deleteNote");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", saveNewNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;

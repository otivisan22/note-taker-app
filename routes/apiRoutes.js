const express = require("express");
const router = express.Router();
const path = require("path")


router.get("/api/notes", function (req, res) {
res.json(notes);
}

router.post("/api/notes", function (req, res) => {
  const newNote = req.body;
  notes.push(newNote);
  return console.log("Add new note:" +newNote.title);
});

router.get("/api/notes/:id", function(req, res) {
  res.send("notes" + req.params.id + '!');
});

router.delete("api/notes/:id", (req, res) => {
  notes.del(req.params.id)
    .then(() => {
      req.session.message = "Delete the note!"
      res.json({ ok: true })
    })
});


module.exports = router;

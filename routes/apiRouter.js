const express = require("express");
const router = express.Router();
const path = require("path")
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');

uuidv4();


router.get("/api/notes", function (req, res) {
    try {
      const data = path.join(__dirname, "./db/data.json");
      fs.readFileSync(data);
    } catch (err) {
      console.log(err);
    }
    res.json(JSON.parse(data)),
  };
  


router.post("/api/notes", function (req, res) {
  const newNote = req.body,
  notes.push(newNote),
  return console.log("Add new note:" +newNote.title)
})

router.get("/api/notes/:id", function(req, res) {
  res.send("notes" + req.params.id + '!')
})

router.delete("api/notes/:id", (req, res) => {
  notes.del(req.params.id),
    .then(() => {
      req.session.message = "Delete the note!"
      res.json({ ok: true })
    })
});


module.exports = router;

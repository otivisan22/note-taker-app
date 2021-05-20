
router.delete("api/notes/:id", (req, res) => {
  notes.del(req.params.id),
    .then(() => {
      req.session.message = "Delete the note!"
      res.json({ ok: true })
    })
});

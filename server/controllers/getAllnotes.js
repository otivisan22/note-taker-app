const getFromDb = require("../utils/getFromDb");

const getAllNotes = (req, res) => {
  const notes = getFromDb();
  res.json(notes);
};

module.exports = getAllNotes;

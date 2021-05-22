const getFromDb = require("../utils/getFromDb");

const getNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
};

module.exports = getNotes;

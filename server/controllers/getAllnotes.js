const getFromDb = require("../utils/getFromDb");

const getAllNotes = (req, res) => {
  const notes = JSON.parse(getFromDb());
  res.send(notes);
};

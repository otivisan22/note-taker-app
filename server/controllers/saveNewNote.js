const { v4: uuidv4 } = require("uuid");

const getFromDb = require("../utils/getFromDb");
const writeDatabase = require("../utils/writeDatabase");

const saveNewNote = (req, res) => {
  const newNote = { ...req.body, id: uuidv4() };
  const data = getFromDb();
  data.push(newNote);
  writeDatabase(data);
  res.send(newNote);
};

module.exports = saveNewNote;

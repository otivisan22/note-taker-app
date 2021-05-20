const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");

const { v4: uuidv4 } = require("uuid");

uuidv4();

const saveNewNote = (req, res) => {
  const newNote = { ...req.body, id: uuid.v4() };
  const data = JSON.parse(getFromDb());
  data.push(newNote);
  writeToDb(data);
  res.send(newNote);
};

module.exports = saveNewNote;

const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");

const deleteNote = (req, res) => {
  const data = getFromDb();
  const id = req.params.id;
  const newData = data.filter((each) => {
    return each.id !== id;
  });

  writeToDb(newData);
  res.json(newData);
};

module.exports = deleteNote;

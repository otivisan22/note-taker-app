const getFromDb = require("../utils/getFromDb");
const writeDatabase = require("../utils/writeDatabase");
//delete
const deleteNote = (req, res) => {
  const data = getFromDb();
  const id = req.params.id;
  const newData = data.filter((each) => {
    return each.id !== id;
  });

  writeDatabase(newData);
  res.json(newData);
};

module.exports = deleteNote;

const fs = require("fs");
const path = require("path");

const writeDatabase = (data) => {
  const filePath = path.join(__dirname, "../db/db.json");
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = writeDatabase;

//writeToDb

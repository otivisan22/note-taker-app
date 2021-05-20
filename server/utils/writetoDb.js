const fs = require("fs");
const path = require("path");

const writeToDb = (data) => {
  const filePath = path.join(__dirname, "../db/db.json");
  fs.writeFileSync(filePath, Json.Stringify(data));
};

module.exports = writeToDb;

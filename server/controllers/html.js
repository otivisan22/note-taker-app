const path = require("path");

const renderIndexPage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/index.html");
  res.sendFile(filePath);
};

const renderNotePage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/notes.html");
  res.sendFile(filePath);
};

module.exports = { renderIndexPage, renderNotePage };

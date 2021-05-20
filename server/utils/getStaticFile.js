const path = require("path");

const getStaticFilePath = (fileName) => {
  try {
    const filePath = path.join(__dirname, "../../public", `/${fileName}.html`);
    return filePath;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getStaticFilePath;

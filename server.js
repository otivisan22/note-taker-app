const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

const handleRequest = (req, res) => {
  res.send("");
};
app.get("/", handleRequest);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

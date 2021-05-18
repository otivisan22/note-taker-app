const express = require("express");
``;
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const handleRequest = (req, res) => {
  res.send("Hello World!");
};
app.get("/", handleRequest);
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

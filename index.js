const express = require("express");
const cors = require("cors");

const app = express();

const apiRoutes = require("./server/routes/apiRoutes");
const htmlRoutes = require("./server/routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

//Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

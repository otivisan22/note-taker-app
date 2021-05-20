const { Router } = require("express");

const { renderIndexPage, renderNotesPage } = require("../controller/html.js");

const router = Router();

htmlRouter.get("/", renderIndexPage), htmlRouter.get("/notes", renderNotesPage);

module.exports = router;

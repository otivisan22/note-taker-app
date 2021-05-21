const { Router } = require("express");

const { renderIndexPage, renderNotePage } = require("../controllers/html");

const htmlRouter = Router();

htmlRouter.get("/", renderIndexPage);
htmlRouter.get("/notes", renderNotePage);

module.exports = htmlRouter;

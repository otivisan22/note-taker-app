
const {Router}= require("express")
const htmlRouter = Router();
const path = require("path");

htmlRouter.get("/notes", renderIndexPage),
htmlRouter.get("/notes", renderNotesPage);

module.export = "router";

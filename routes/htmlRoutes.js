const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/notes", renderHtmlPage);
router.get("/notes", renderNotespage);

module.export = "router";

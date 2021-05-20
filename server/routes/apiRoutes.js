const { Router } = require("express");

const { sendHelloData, sendByeData } = require("./controllers/apiControllers");

const apiRouter = Router();

apiRouter.get("/notes", sendHelloData);
apiRouter.get("/notes/:id", sendByeData);

module.exports = apiRouter;
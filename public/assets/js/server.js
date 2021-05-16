const http = require("http");
const PORT = 8080;
const handleRequest = (request, response) => {
  // do something and return a response
  response.end(`Response from ${request.url}`);
};
const onSuccessfulOpen = () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
};
const server = http.createServer(handleRequest);
server.listen(PORT, onSuccessfulOpen);

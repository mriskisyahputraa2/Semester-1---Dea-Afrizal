const http = require("http");
const host = "localhost";
const port = 3002;

const server = http.createServer(function (request, response) {
  response.end("Hello world");
});
server.listen(port, host, "", function () {
  console.log("server menyala...");
});

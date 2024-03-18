const http = require("http");
const host = "127.0.0.1"; // ini localhost
const port = 3002; // ini port yang dijalankan

// request adalah = data masuk dari luar
// response adalah = data keluar dari sistem

const server = http.createServer(function (request, response) {
  response.statusCode = 203; // mengatur status code
  response.end("Hello brorrrs");
});
server.listen(port, host, function () {
  console.log(`server menyala di ${host}:${port}`);
});

// video 42.29

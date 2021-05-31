const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

// ultima linha do codigo
server.listen(port, function() {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("mock-api/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5432;

server.use(middlewares);
server.use("/api", router);

server.listen(port);
const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const fs = require("fs");
var tls = {
  key: fs.readFileSync("/etc/letsencrypt/live/example.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/example.com/cert.pem"),
};
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
    tls: tls,
  });
  server.route(routes);
  await server.start();
  console.log(`Server Berjalan pada ${server.info.uri}`);
};

init();

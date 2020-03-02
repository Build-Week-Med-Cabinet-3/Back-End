const express = require("express");

// import routes
const apiRouter = require("./router.js");

// import middleware
const configMiddleware = require("./config-middleware.js");

// create server
const server = express();

// call middleware
configMiddleware(server);

// set routes
server.use("/api", apiRouter)

server.get("/", (req, res) => {
    res.json({ server: "up" })
})

module.exports = server;
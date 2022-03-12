const express = require("express");
// const { WebSocketServer } = require("ws");
// const { parse } = require("url");
const { createServer } = require("http");

// Express setup
const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static("public"));

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

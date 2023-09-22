const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const apiRouter = require("./controllers/api.controller");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", apiRouter);

app.use((err, req, res, _next) => res.send(err.message));

module.exports = app;

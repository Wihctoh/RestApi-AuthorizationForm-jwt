const express = require("express");
const cors = require("cors");

const apiRouter = require("./controllers/api.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", apiRouter);

app.use((err, req, res, _next) => res.send(err.message));

module.exports = app;

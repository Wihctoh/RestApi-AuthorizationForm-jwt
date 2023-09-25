const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const apiRouter = require("./controllers/api.controller");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

app.use("/user", apiRouter);

app.use((err, req, res, _next) => res.send(err.message));

module.exports = app;

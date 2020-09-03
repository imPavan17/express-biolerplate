const express = require("express");
const { httpLogger } = require("./middlewares");
const { handleError, logger } = require("./helpers");
const todoRoutes = require("./routes/todo.routes");
const app = express();

app.use(httpLogger);
app.use(express.json());

app.use("/todos", todoRoutes);

app.use((err, req, res, next) => {
  handleError(err, res);
  logger.error(err);
});

module.exports = app;

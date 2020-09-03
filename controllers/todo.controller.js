const { ErrorHandler } = require("../helpers");

exports.createTodo = (req, res, next) => {
  const { todo } = req.body;
  if (!todo) {
    throw new ErrorHandler(400, "Task name not found!");
  }
  res.status(201).json(req.body);
};

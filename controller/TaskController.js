const Task = require("../models/taskModel");

const handleErrors = (err) => {
  let errors = {
    title: "",
    description: "",
    email: "",
    type: "",
    userId: "",
    ddl: "",
    progress: "",
    documents: "",
    idProject: "",
  };
  if (err.message.includes("task validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.task_post = async (req, res, next) => {
  const {
    title,
    description,
    email,
    type,
    userId,
    ddl,
    progress,
    documents,
    idProject,
  } = req.body;

  try {

    const task = await Task.create({
      title,
      description,
      email,
      type,
      userId,
      ddl,
      progress,
      documents,
      idProject,
    });
    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.tasks_get = async (req, res, next) => {
  Task.find({})
    .then(function (tasks) {
      res.send(tasks);
    })
    .catch(next);
};

module.exports.tasks_get_user = async (req, res, next) => {
  const id = req.params.id;
  Task.find({ userId: id })
    .then(function (tasks) {
      res.send(tasks);
    })
    .catch(next);
};

module.exports.tasks_get_project = async (req, res, next) => {
  const projectId = req.params.type;
  Task.find({ idProject: projectId })
    .then(function (tasks) {
      res.send(tasks);
    })
    .catch(next);
};

module.exports.tasks_get_one = async (req, res, next) => {
  const id = req.params.id;
  Task.findOne({ _id: id })
    .then(function (task) {
      res.send(task);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.task_put = (req, res, next) => {
  Task.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Task.findOne({ _id: req.params.id }).then(function (task) {
        res.send(task);
      });
    })
    .catch(next);
};

module.exports.task_delete = (req, res, next) => {
  Task.findByIdAndDelete({ _id: req.params.id })
    .then(function (task) {
      res.send(task);
    })
    .catch(next);
};

module.exports.taskSearch_get = async (req, res, next) => {
  try {
    const findname = req.params.title;
    const objs = await Task.find({
      $or: [{ title: { $regex: findname } }],
    });
    res.send(objs);
  } catch (error) {
    res.send({ message: error });
  }
};

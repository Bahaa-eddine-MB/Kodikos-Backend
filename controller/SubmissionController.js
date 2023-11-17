const Submission = require("../models/submissionModel");

const handleErrors = (err) => {
  let errors = {
    title: "",
    description: "",
    taskId: "",
    userId: "",
    projectId: "",
  };
  if (err.message.includes("submission validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.submission_post = async (req, res, next) => {
  const { title, description, taskId, userId, documents, projectId } = req.body;
  try {
    const submission = await Submission.create({
      title,
      description,
      taskId,
      userId,
      documents,
      projectId,
    });
    res.status(201).json(submission);
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.submission_get = async (req, res, next) => {
  Submission.find({})
    .then(function (submissions) {
      res.send(submissions);
    })
    .catch(next);
};

module.exports.submission_get_project = async (req, res, next) => {
  const id = req.params.id;
  Submission.find({ projectId: id })
    .then(function (submission) {
      res.send(submission);
    })
    .catch(next);
};
module.exports.submission_get_user = async (req, res, next) => {
  const id = req.params.id;
  Submission.find({ userId: id })
    .then(function (submission) {
      res.send(submission);
    })
    .catch(next);
};

module.exports.submission_get_task = async (req, res, next) => {
  const taskId = req.params.type;
  Submission.find({ taskId: taskId })
    .then(function (submission) {
      res.send(submission);
    })
    .catch(next);
};

module.exports.submission_get_one = async (req, res, next) => {
  const id = req.params.id;
  Submission.findOne({ _id: id })
    .then(function (task) {
      res.send(task);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.submission_put = (req, res, next) => {
  Submission.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Submission.findOne({ _id: req.params.id }).then(function (submission) {
        res.send(submission);
      });
    })
    .catch(next);
};

module.exports.submission_delete = (req, res, next) => {
  Submission.findByIdAndDelete({ _id: req.params.id })
    .then(function (submission) {
      res.send(submission);
    })
    .catch(next);
};

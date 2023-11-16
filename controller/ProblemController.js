const Problem = require("../models/problemModel");

const handleErrors = (err) => {
  let errors = {
    title: "",
    description: "",
    type: "",
    userId: "",
    bureauId: "",
  };
  if (err.message.includes("Problem validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.Problem_post = async (req, res, next) => {
  const { title, description, type, userId, bureauId } = req.body;

  try {
    const problem = await Problem.create({
      title,
      description,
      type,
      userId,
      bureauId,
    });
    res.status(201).json(problem);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.Problem_get = async (req, res, next) => {
  Problem.find({})
    .then(function (problems) {
      res.send(problems);
    })
    .catch(next);
};

module.exports.Problem_get_user = async (req, res, next) => {
  const id = req.params.id;
  Problem.find({ userId: id })
    .then(function (problem) {
      res.send(problem);
    })
    .catch(next);
};

module.exports.Problem_get_bureau = async (req, res, next) => {
  const bureauId = req.params.type;
  Problem.find({ bureauId: bureauId })
    .then(function (problem) {
      res.send(problem);
    })
    .catch(next);
};

module.exports.Problem_get_one = async (req, res, next) => {
  const id = req.params.id;
  Problem.findOne({ _id: id })
    .then(function (problem) {
      res.send(problem);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.Problem_put = (req, res, next) => {
  Problem.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Product.findOne({ _id: req.params.id }).then(function (problem) {
        res.send(problem);
      });
    })
    .catch(next);
};

module.exports.Problem_delete = (req, res, next) => {
  Problem.findByIdAndRemove({ _id: req.params.id })
    .then(function (problem) {
      res.send(problem);
    })
    .catch(next);
};

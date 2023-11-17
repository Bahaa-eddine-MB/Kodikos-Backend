const Project = require("../models/projectModel");

const handleErrors = (err) => {
  let errors = {
    title: "",
    description: ""
  };
  if (err.message.includes("project validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.Project_post = async (req, res, next) => {
  const { title, description} = req.body;

  try {
    const project = await Project.create({
      title,
      description,

    });
    res.status(201).json(project);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.Project_get = async (req, res, next) => {
  Project.find({})
    .then(function (projects) {
      res.send(projects);
    })
    .catch(next);
};




module.exports.Project_get_one = async (req, res, next) => {
  const id = req.params.id;
  Project.findOne({ _id: id })
    .then(function (project) {
      res.send(project);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.Project_put = (req, res, next) => {
  Project.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Project.findOne({ _id: req.params.id }).then(function (project) {
        res.send(project);
      });
    })
    .catch(next);
};

module.exports.Project_delete = (req, res, next) => {
  Project.findByIdAndDelete({ _id: req.params.id })
    .then(function (project) {
      res.send(project);
    })
    .catch(next);
};


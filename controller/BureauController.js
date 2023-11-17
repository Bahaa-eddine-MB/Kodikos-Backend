const Bureau = require("../models/bureauModel");

const handleErrors = (err) => {
  let errors = {
    adresse: "",
    userId: "",
  };
  if (err.message.includes("bureau validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.Bureau_post = async (req, res, next) => {
  const { adresse, userId } = req.body;

  try {
    const bureau = await Bureau.create({
      adresse,
      userId,
    });
    res.status(201).json(bureau);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.Bureau_get = async (req, res, next) => {
  Bureau.find({})
    .then(function (bureaus) {
      res.send(bureaus);
    })
    .catch(next);
};

module.exports.Bureau_get_user = async (req, res, next) => {
  const id = req.params.id;
  Bureau.find({ userId: id })
    .then(function (Bureau) {
      res.send(Bureau);
    })
    .catch(next);
};

module.exports.Bureau_get_one = async (req, res, next) => {
  const id = req.params.id;
  Bureau.findOne({ _id: id })
    .then(function (bureau) {
      res.send(bureau);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.Bureau_put = (req, res, next) => {
  Bureau.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Bureau.findOne({ _id: req.params.id }).then(function (bureau) {
        res.send(bureau);
      });
    })
    .catch(next);
};

module.exports.Bureau_delete = (req, res, next) => {
  Bureau.findByIdAndDelete({ _id: req.params.id })
    .then(function (bureau) {
      res.send(bureau);
    })
    .catch(next);
};

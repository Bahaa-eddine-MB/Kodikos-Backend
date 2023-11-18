
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  if (err.message === "incorrect email") {
    errors.email = "email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "incorrect password";
  }
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "Kodikos back end secret", {
    expiresIn: maxAge,
  });
};

module.exports.all_users_get = (req, res, next) => {
  User.find({}).then(function (users) {
    res.send(users);
  });
};

module.exports.user_put = (req, res, next) => {
  const { id } = req.body;
  User.findByIdAndUpdate({ _id: id }, req.body)
    .then(function () {
      User.findOne({ _id: id }).then(function (user) {
        res.send(user);
      });
    })
    .catch(next);
};

module.exports.user_get = (req, res, next) => {
  const id = req.params.id;
  User.findOne({ _id: id }).then(function (user) {
    res.send(user);
  });
};

module.exports.signup_post = async (req, res, next) => {
  const { email, password, name, role, projectIds } = req.body;

  try {
    const user = await User.create({
      email,
      password,
      name,
      role,
      projectIds,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.update_password = async (req, res, next) => {
  const { email, password, newpassword } = req.body;
  try {
    const user = await User.login(email, password);
    const salt = await bcrypt.genSalt();
    const newP = await bcrypt.hash(newpassword, salt);
    User.findByIdAndUpdate({ _id: user._id }, { password: newP }).then(() =>
      console.log("password updated")
    );
    res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.send("logout completed");
  } catch (err) {
    res.send(err);
  }
  // res.redirect('/')
};

module.exports.userSearch_get = async (req, res, next) => {
  try {
    const { role } = req.body;
    const objs = await User.find({
      role: role
    });
    res.send(objs);
  } catch (error) {
    res.send({ message: error });
  }
};

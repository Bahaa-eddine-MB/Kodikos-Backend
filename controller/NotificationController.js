const Notification = require("../models/notificationModel");

const handleErrors = (err) => {
  let errors = {
    title: "",
    description: "",
    userId: "",
  };
  if (err.message.includes("Notification validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.Notification_post = async (req, res, next) => {
  const { title, description, userId } = req.body;

  try {
    const notification = await Notification.create({
      title,
      description,
      userId,
    });
    res.status(201).json(notification);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.Notification_get = async (req, res, next) => {
  Notification.find({})
    .then(function (notifications) {
      res.send(notifications);
    })
    .catch(next);
};

module.exports.Notification_get_user = async (req, res, next) => {
  const id = req.params.id;
  Notification.find({ userId: id })
    .then(function (notification) {
      res.send(notification);
    })
    .catch(next);
};

module.exports.Notification_get_one = async (req, res, next) => {
  const id = req.params.id;
  Notification.findOne({ _id: id })
    .then(function (notification) {
      res.send(notification);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.Notification_put = (req, res, next) => {
  Notification.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Notification.findOne({ _id: req.params.id }).then(function (notification) {
        res.send(notification);
      });
    })
    .catch(next);
};

module.exports.Notification_delete = (req, res, next) => {
  Notification.findByIdAndDelete({ _id: req.params.id })
    .then(function (notification) {
      res.send(notification);
    })
    .catch(next);
};

const mongoose = require("mongoose");

const taskShema = new mongoose.Shema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    ddl: {
      type: String,
      required: true,
    },
    progress: {
      type: String,
      default: "uncomplete",
    },
    documents: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskShema);

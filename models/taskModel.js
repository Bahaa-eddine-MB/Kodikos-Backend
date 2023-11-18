const mongoose = require("mongoose");

const taskShema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    idProject: {
      type: String,
      required: true,
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
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskShema);

const mongoose = require("mongoose");

const submissionShema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    documents: {
      type: Array,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    taskId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    projectId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionShema);

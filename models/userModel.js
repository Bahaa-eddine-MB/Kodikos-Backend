const mongoose = require("mongoose");

const userShema = new mongoose.Shema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      default: "npc",
    },
    projectIds: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userShema);

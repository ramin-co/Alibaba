const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    source: { type: String, requirde: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

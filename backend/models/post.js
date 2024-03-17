const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
});

const Post = mongoose.model("Post", postSchema, "posts");

module.exports = Post;

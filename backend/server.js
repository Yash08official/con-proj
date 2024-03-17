const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Post = require("./models/post");

const app = express();

/* to send a data from frontend to backend */
app.use(express.json());

/* setup cors for security so only our frontend can take a resposen from server*/
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "wwww.yournewurl.com",
      "https://www.udemy.com",
    ],
  })
);

app.get("/post", async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.json(posts);
  } catch (error) {
    return res.json(error);
  }
});

app.get("/post/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findOne({ _id: id });
    res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.post("/post", async (req, res, next) => {
  try {
    const titleFromFrondend = req.body.title;
    const descriptionFromFrontend = req.body.description;

    if (!titleFromFrondend || !descriptionFromFrontend) {
      return res
        .status(400)
        .json({ error: "title and description is required" });
    }

    const post = await Post.create({
      title: titleFromFrondend,
      description: descriptionFromFrontend,
    });

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.patch("/post/:id", async (req, res, next) => {
  try {
    const titleFromFrondend = req.body.title;
    const descriptionFromFrontend = req.body.description;

    const post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: titleFromFrondend,
        description: descriptionFromFrontend,
      }
    );

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.delete("/post/:id", async (req, res, next) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id });

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.listen(5000, () => {
  try {
    const databaseName = "somthing";
    mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`);
    console.log("connect to database successfully..!");
    console.log("listen on port 5000");
  } catch (error) {
    console.log("Error " + error);
  }
});

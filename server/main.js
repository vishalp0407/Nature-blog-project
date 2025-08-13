import express from "express";
import dotenv from "dotenv";

import posts from "#data/posts.js";
import connectDB from "#config/db.config.js";

dotenv.config();
connectDB();

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/v1/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/v1/posts/:id", (req, res) => {
  const post = posts.find((post) => post._id === req.params.id);
  res.json(post);
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

import express from "express";
import dotenv from "dotenv";

import connectDB from "#config/db.config.js";
import postRoutes from "#routes/post.routes.js";
import { errorHandler } from "#middlewares/error.middleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/v1/posts", postRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

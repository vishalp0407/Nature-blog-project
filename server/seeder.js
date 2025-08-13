import dotenv from "dotenv";

import connectDB from "#config/db.config.js";
import posts from "#data/posts.js";
import PostModel from "#models/post.model.js";
import UserModel from "#models/user.model.js";
import users from "#data/users.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await PostModel.deleteMany();
    await UserModel.deleteMany();

    const createdUsers = await UserModel.insertMany(users);

    const adminUserId = createdUsers[0]._id;

    const samplePosts = posts.map((post) => {
      return { ...post, author: adminUserId };
    });
    await PostModel.insertMany(samplePosts);
    console.log("Data Import");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await PostModel.deleteMany();
    await UserModel.deleteMany();
    console.log("❌ Data Destroyed");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

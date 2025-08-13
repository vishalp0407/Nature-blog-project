import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: [
        "Wildlife",
        "Forests",
        "Oceans",
        "Mountains",
        "Climate Change",
        "Other",
      ],
      default: "Other",
    },
    tags: {
      type: [String],
      default: [],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, collection: "posts" }
);

const PostModel = mongoose.model("PostModel", postSchema);
export default PostModel;

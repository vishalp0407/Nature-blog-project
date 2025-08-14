import PostModel from "#models/post.model.js";

const getAllPost = async (req, res) => {
  const posts = await PostModel.find({});
  res.json(posts);
};

const getProductsById = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new error("post not found");
  }
};

export { getAllPost, getProductsById };

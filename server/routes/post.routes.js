import express from "express";

import { getAllPost, getProductsById } from "#controllers/post.controller.js";
const router = express.Router();

router.get("/", getAllPost);
router.get("/:id", getProductsById);

export default router;

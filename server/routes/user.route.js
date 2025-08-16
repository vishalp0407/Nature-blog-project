import { authUser, registerUser } from "#controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);

export default router;

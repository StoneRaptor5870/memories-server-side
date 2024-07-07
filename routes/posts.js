import express from "express";
import multer from "multer";

import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  commentPost,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();
const upload = multer();

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", auth, upload.single("selectedFile"), createPost);
router.patch("/:id", auth, upload.single("selectedFile"), updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;

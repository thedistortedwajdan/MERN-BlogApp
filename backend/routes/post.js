import express from "express";

import {
  getAllPosts,
  getPost,
  update,
  upload,
  deletePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", upload);
router.delete("/:id", deletePost);
router.put("/:id", update);

export default router;

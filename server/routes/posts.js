import express from "express";
import { getFeedPosts, getUserPosts, getUserComments, likePost, deletePost, commentPost, deleteComment } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.get("/:id/comment", verifyToken, getUserComments);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

router.post("/:id/comment", verifyToken, commentPost);
router.delete("/:id/:commentId", verifyToken, deleteComment);

/* DELETE */
router.delete("/:id", verifyToken, deletePost);


export default router;
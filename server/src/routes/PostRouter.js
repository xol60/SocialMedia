import express from "express";
import { createPost, getPost, likeDislikePost, getPostsTimeLine } from "../controllers/PostController.js";
const router = express.Router()

router.post('/create', createPost)
router.get('/:id/get', getPost)
router.put('/:id/status-change', likeDislikePost)
router.get('/get-posts', getPostsTimeLine)
export default router;
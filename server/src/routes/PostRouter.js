import express from "express";
import { createPost, getPost, likeDislikePost, getPostsTimeLine, testPost } from "../controllers/PostController.js";
import { upload } from "../middleware/multer.js";
const router = express.Router()
router.post('/test', upload, testPost)
router.post('/create', createPost)
router.get('/:id/get', getPost)
router.put('/:id/status-change', likeDislikePost)
router.get('/get-posts', getPostsTimeLine)
export default router;
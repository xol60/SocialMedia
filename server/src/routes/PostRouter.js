import express from "express";
import { createPost, getPost, likeDislikePost, getPostsTimeLine, testPost } from "../controllers/PostController.js";
import { upload } from "../middleware/multer.js";
import { authentication } from "../middleware/authentication.js";
const router = express.Router()
router.post('/test', upload, testPost)
router.post('/create', upload, createPost)
router.get('/:id/get', getPost)
router.put('/:id/status-change', likeDislikePost)
router.get('/get-posts', authentication, getPostsTimeLine)
export default router;
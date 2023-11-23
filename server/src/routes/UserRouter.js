import express from 'express'
import { getAllUser, getUser, changeFollowStatus, getProfile, getFollowing, updateUser } from '../controllers/UserController.js'
import { authentication, isAdmin } from '../middleware/authentication.js';
import { uploadMultiple } from '../middleware/multer.js';
const router = express.Router()

router.get('/:id/profile', isAdmin, getUser);
router.get('/all-user', isAdmin, getAllUser)
router.put('/:id/status-change', authentication, changeFollowStatus)
router.get('/profile', authentication, getProfile)
router.get('/get-following', authentication, getFollowing)
router.put('/update-user', uploadMultiple, authentication, updateUser)
export default router
import express from 'express'
import { getAllUser, getUser, changeFollowStatus, getProfile } from '../controllers/UserController.js'
import { authentication, isAdmin } from '../middleware/authentication.js';

const router = express.Router()

router.get('/:id/profile', isAdmin, getUser);
router.get('/all-user', isAdmin, getAllUser)
router.put('/:id/status-change', authentication, changeFollowStatus)
router.get('/profile', authentication, getProfile)
export default router
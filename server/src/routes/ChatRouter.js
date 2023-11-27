import { authentication } from "../middleware/authentication.js";
import { createChat, getChats } from "../controllers/ChatController.js";
import express from 'express'
const router = express()
router.post('/create', authentication, createChat)
router.get('/get', authentication, getChats)
export default router
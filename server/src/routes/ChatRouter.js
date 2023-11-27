import { authentication } from "../middleware/authentication.js";
import { createChat, getChat, getChats } from "../controllers/ChatController.js";
import express from 'express'
const router = express()
router.post('/create', authentication, createChat)
router.get('/get', authentication, getChats)
router.get('/:id/get-chat', getChat)
export default router
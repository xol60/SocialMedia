import express from 'express'
const router = express.Router()
import { authentication } from '../middleware/authentication.js'
import { createMessage, getMessages } from '../controllers/MessageController.js'
router.post('/create', authentication, createMessage)
router.get('/:chatId', authentication, getMessages)
export default router
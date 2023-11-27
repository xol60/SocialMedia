import { createMessageService, getMessagesService } from "../utils/message.js";
export const createMessage = async (req, res) => {
    try {
        const data = await createMessageService({
            ...req.body,
            senderId: req.user.id
        })
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json(e)
    }
}
export const getMessages = async (req, res) => {
    try {
        const data = await getMessagesService(req.params.chatId)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json(e)
    }
}
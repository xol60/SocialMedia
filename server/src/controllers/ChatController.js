import { createChatService, getChatsService, getChatService } from "../utils/chat.js";
export const createChat = async (req, res) => {
    try {
        const data = await createChatService({
            ...req.body
        })
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json(e)
    }
}
export const getChats = async (req, res) => {
    try {

        const data = await getChatsService(req.user.id)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const getChat = async (req, res) => {
    try {

        const data = await getChatService(req.params.id)
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json(e)
    }
}
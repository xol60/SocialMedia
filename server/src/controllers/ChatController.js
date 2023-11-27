import { createChatService, getChatsService } from "../utils/chat.js";
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

export const createChat1 = async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json(e)
    }
}
import MessageModel from "../models/MessageModel.js";
export const createMessageService = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newMessage = new MessageModel({
                ...data
            });;
            await newMessage.save()
            resolve({
                message: 'create success'
            })
        } catch (e) {
            reject(e)
        }
    })
}
export const getMessagesService = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(id)
            const messages = MessageModel.find({
                chatId: id
            })
            resolve(messages)
        } catch (e) {
            reject(e)
        }
    })
}
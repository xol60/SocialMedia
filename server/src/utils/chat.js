import ChatModel from "../models/ChatModel.js";
import mongoose from "mongoose";
export const createChatService = async ({ firstId, secondId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newChat = new ChatModel({
                members: [firstId, secondId],
            });;
            await newChat.save()
            resolve({
                message: 'create success'
            })
        } catch (e) {
            reject(e)
        }
    })
}
export const getChatsService = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            const chats = ChatModel.aggregate([
                {
                    $match: {
                        members: { $in: [id] },
                    }
                },
                {
                    $addFields: {
                        "members": {
                            $map: {
                                "input": "$members",
                                "in": {
                                    id: {
                                        "$toObjectId": "$$this"
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "members.id",
                        foreignField: "_id",
                        as: "userData"
                    }
                },

                {
                    $project: {
                        "_id": 1,
                        "members": 1,
                        "name": 1,
                        "userData._id": 1,
                        "userData.firstname": 1,
                        "userData.lastname": 1,
                        "userData.profilePicture": 1
                    }
                }
            ])
            resolve(chats)
        } catch (e) {
            reject(e)
        }
    })
}
export const getChatService = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {

            const chat = ChatModel.aggregate([
                {
                    $match: {
                        _id: new mongoose.Types.ObjectId(id),
                    }
                },
                {
                    $addFields: {
                        "members": {
                            $map: {
                                "input": "$members",
                                "in": {
                                    id: {
                                        "$toObjectId": "$$this"
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "members.id",
                        foreignField: "_id",
                        as: "userData"
                    }
                },

                {
                    $project: {
                        "_id": 1,
                        "members": 1,
                        "name": 1,
                        "userData._id": 1,
                        "userData.firstname": 1,
                        "userData.lastname": 1,
                        "userData.profilePicture": 1
                    }
                }
            ])
            resolve(chat)
        } catch (e) {
            console.log(e)
            reject(e)
        }
    })
}
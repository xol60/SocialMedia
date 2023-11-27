import MessageModel from "../models/MessageModel.js";
import UserModel from "../models/UserModel.js";
export const createMessageService = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newMessage = new MessageModel({
                ...data
            });;
            await newMessage.save()
            const user = await UserModel.findById(data.senderId)
            resolve({
                newMessage,
                userData: {
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    profilePicture: user.profilePicture
                }

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
            const messages = MessageModel.aggregate([
                {
                    $match: {
                        chatId: id
                    }
                },
                {
                    $addFields: {
                        senderId: {
                            $toObjectId: "$senderId"
                        }


                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "senderId",
                        foreignField: "_id",
                        as: "userData"
                    }
                },
                {
                    $project: {
                        "_id": 1,
                        "chatId": 1,
                        "senderId": 1,
                        "text": 1,
                        "createdAt": 1,
                        "userData._id": 1,
                        "userData.firstname": 1,
                        "userData.lastname": 1,
                        "userData.profilePicture": 1
                    }
                }
            ]
            )
            resolve(messages)
        } catch (e) {
            reject(e)
        }
    })
}
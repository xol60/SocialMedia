import UserModel from "../models/UserModel.js";

import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
export const getUserService = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await UserModel.findById(id);
            if (user) {
                const { password, ...otherDetails } = user._doc;

                resolve(otherDetails)
            } else {
                reject({
                    message: 'Cannot find user'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
export const getAllUserService = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await UserModel.find();
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
export const followUnfollowService = async ({ id, idFollow }) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(id, idFollow)
            if (idFollow === id) {
                reject({
                    message: 'Access Denied'
                })
            } else {
                const followUser = await UserModel.findById(id);
                const followingUser = await UserModel.findById(idFollow);

                if (!followUser.followers.includes(idFollow)) {
                    await followUser.updateOne({ $push: { followers: idFollow } });
                    await followingUser.updateOne({ $push: { following: id } });
                    resolve({
                        message: "User Followed!"
                    });
                } else {
                    await followUser.updateOne({ $pull: { followers: idFollow } });
                    await followingUser.updateOne({ $pull: { following: id } });
                    resolve({
                        message: "User Unfollowed!"
                    });
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}
export const getFollowingUsers = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await UserModel.findById(id)
            const following = user.following
            let users = await UserModel.find({ _id: { $in: following } });
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
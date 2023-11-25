import PostModel from "../models/PostModel.js";
import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";
export const createPostService = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newPost = new PostModel(data);
            await newPost.save();
            resolve({
                message: 'Create post successfull'
            })
        } catch (e) {
            reject(e)
        }
    })
}
export const getPostService = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const post = new PostModel.findById(id);;
            resolve(post)
        } catch (e) {
            reject(e)
        }
    })
}
export const likeDislikeService = async ({ idUser, idPost }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const post = await PostModel.findById(idPost);
            if (post.likes.includes(idUser)) {
                await post.updateOne({ $pull: { likes: idUser } });
                resolve({ messge: "Post disliked" });
            } else {
                await post.updateOne({ $push: { likes: idUser } });
                resolve({ messge: "Post liked" });
            }
        } catch (e) {
            reject(e)
        }
    })
}
export const getPostsTimelineService = async ({ id, pageNumber, pageSize }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const followingPosts = await UserModel.aggregate([
                {
                    $match: {
                        _id: new mongoose.Types.ObjectId(id),
                    },
                },
                {
                    $lookup: {
                        from: "posts",
                        localField: "followers",
                        foreignField: "userId",
                        as: "followingPosts",
                    },
                },
                {
                    $project: {
                        followingPosts: 1,
                        _id: 0,
                    },
                },
                { $skip: (pageNumber - 1) * 0 },
                { $limit: pageSize },
                {
                    $sort: {
                        createdAt: -1
                    }
                }
            ]);

            resolve(followingPosts)
        } catch (e) {
            reject(e)
        }
    })
}
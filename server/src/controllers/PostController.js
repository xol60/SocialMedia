import { createPostService, getPostService, likeDislikeService, getPostsTimelineService } from "../utils/post.js";
import uploadImage from "../utils/file.js";
export const createPost = async (req, res) => {
    try {
        const imageURL = await uploadImage({
            file: req.file,
            quantity: "single"
        })
        const data = await createPostService({
            userId: req.body.userId,
            desc: req.body.descrtiption,
            image: imageURL,
            desc: req.body.desc
        })
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
        res.status(401).json(e)
    }
}
export const getPost = async (req, res) => {
    try {
        const data = await getPostService(req.params.id)
        res.status(200).json(data)
    } catch (e) {
        res.status(401).json(e)
    }
}
export const likeDislikePost = async (req, res) => {
    try {
        console.log(req.params)
        const data = await likeDislikeService({
            idUser: req.user.id,
            idPost: req.params.id
        })
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
        res.status(401).json(e)
    }
}
export const getPostsTimeLine = async (req, res) => {
    try {
        const data = await getPostsTimelineService({
            id: req.user.id,
            pageNumber: req.query.pageNumber || 1,
            pageSize: req.query.pageSize || 5
        })
        res.status(200).json(data)
    } catch (e) {
        res.status(401).json(e)
    }
}
export const testPost = async (req, res) => {
    try {
        const imageURL = await uploadImage({
            file: req.file,
            quantity: "single"
        })
        res.status(200).json(imageURL)
    } catch (e) {
        res.status(400).json(e)
    }
}
import { getUserService, getAllUserService, followUnfollowService, getFollowingUsers, updateNewUser } from '../utils/user.js'
import uploadImage from '../utils/file.js';
export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await getUserService(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
};
export const getProfile = async (req, res) => {
    const id = req.user.id;
    try {
        const data = await getUserService(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
};
export const getAllUser = async (req, res) => {
    try {
        const data = await getAllUserService();
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
};
export const changeFollowStatus = async (req, res) => {
    try {
        const data = await followUnfollowService({
            id: req.user.id,
            idFollow: req.params.id
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
};
export const updateUser = async (req, res) => {


    try {
        const formData = {
            profilePicture: await uploadImage({
                file: req.files[0],
                quantity: "single"
            }),
            coverPicture: await uploadImage({
                file: req.files[1],
                quantity: "single"
            }),
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            about: req.body.about,
            livesIn: req.body.livesIn,
            worksAt: req.body.worksAt,
            relationship: req.body.relationship,
            country: req.body.country
        }
        const data = await updateNewUser({
            id: req.user.id,
            data: formData
        })
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
export const getFollowing = async (req, res) => {
    try {
        const data = await getFollowingUsers(req.user.id)

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error);
    }
};


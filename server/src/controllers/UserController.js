import { getUserService, getAllUserService, followUnfollowService } from '../utils/user.js'

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
export const getUser1 = async (req, res) => {


    try {

    } catch (error) {
        res.status(500).json(error);
    }
};



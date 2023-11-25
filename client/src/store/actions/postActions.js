import actionTypes from "./actionTypes";
import { createPost, getPosts, statusPostChange } from "../../services";
export const createNewPost = (data) => {
    return (async (dispatch) => {
        try {
            dispatch({ type: actionTypes.CREATE_POST_START });
            const res = await createPost(data)
            if (res && res.status == 200) {
                dispatch({
                    type: actionTypes.CREATE_POST_SUCCESS,
                    data: res.data
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.CREATE_POST_FAIL
            })
        }
    })
}
export const getPostsTimeline = (data) => {
    return (async (dispatch) => {
        try {
            dispatch({ type: actionTypes.GET_POSTS_START });
            const res = await getPosts(data)

            if (res && res.status == 200) {
                dispatch({
                    type: actionTypes.GET_POSTS_SUCCESS,
                    data: res.data[0].followingPosts
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.GET_POSTS_FAIL
            })
        }
    })
}
export const likeDislikePost = ({ idUser, idPost, token, status }) => {
    return (async (dispatch) => {
        try {
            console.log(idUser, idPost, status)
            dispatch({ type: actionTypes.CHANGE_POSTS_START });
            const res = await statusPostChange({ token, id: idPost })

            if (res && res.status == 200) {
                dispatch({
                    type: actionTypes.CHANGE_POSTS_SUCCESS,
                    data: {
                        status,
                        idUser,
                        idPost
                    }
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.CHANGE_POSTS_FAIL
            })
        }
    })
}
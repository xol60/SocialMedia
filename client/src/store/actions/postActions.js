import actionTypes from "./actionTypes";
import { createPost } from "../../services";
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
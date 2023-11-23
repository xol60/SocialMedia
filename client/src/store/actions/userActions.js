import actionTypes from "./actionTypes";
import { statusChange, updateNewUser } from "../../services";
export const followUnfollowUser = ({ token, id, status }) => {
    return (async (dispatch) => {
        try {
            dispatch({ type: actionTypes.FOLLOW_USER_START });
            console.log(id, status)
            const res = await statusChange({ token, id })
            if (res && res.status == 200) {
                dispatch({
                    type: actionTypes.FOLLOW_USER_SUCCESS,
                    data: {
                        id,
                        status
                    }
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FOLLOW_USER_FAIL
            })
        }
    })
}
export const updateUser = ({ token, data }) => {
    return (async (dispatch) => {
        try {
            dispatch({ type: actionTypes.UPDATE_USER_START });
            const res = await updateNewUser({ token, data })
            if (res && res.status == 200) {
                dispatch({
                    type: actionTypes.UPDATE_USER_SUCCESS,
                    data: res.data
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.UPDATE_USER_FAIL
            })
        }
    })
}
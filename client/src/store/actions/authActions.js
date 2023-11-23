import actionTypes from "./actionTypes";
import { logIn, register } from "../../services";
export const loginUser = (data) => {
    return (async (dispatch) => {
        try {
            dispatch({ type: actionTypes.FETCH_LOGIN_START });
            const res = await logIn({ ...data })
            if (res && res.status == 200) {
                console.log(res)
                dispatch({
                    type: actionTypes.FETCH_LOGIN_SUCCESS,
                    data: res.data
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_LOGIN_FAIL
            })
        }
    })
}
export const registerUser = (data) => {
    return (async (dispatch) => {
        try {
            dispatch({ type: actionTypes.FETCH_REGISTER_START });
            const res = await register({ ...data })
            if (res && res.status == 200) {
                console.log(res.data)
                dispatch({
                    type: actionTypes.FETCH_REGISTER_SUCCESS,
                    data: res.data
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_REGISTER_FAIL
            })
        }
    })
}
export const logoutUser = () => {
    return ((dispatch) => {
        dispatch({
            type: actionTypes.LOG_OUT
        })
    })
}
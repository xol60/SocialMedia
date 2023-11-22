import actionTypes from "./actionTypes";
import { logIn } from "../../services";
export const logIn = (data) => {
    return (async (dispatch) => {
        try {
            const res = await logIn({ ...data })
            if (res) {
                console.log(res)
                dispatch({
                    type: actionTypes.FETCH_LOGIN_SUCCESS,
                    data: res
                    // payload: res
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_LOGIN_FAIL
            })
        }
    })
}
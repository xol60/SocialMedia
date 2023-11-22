import actionTypes from "../actions/actionTypes";

const initState = {
    curSongId: null,
    isPlaying: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LOGIN_SUCCESS:
            console.log(action.data)
            return {
                ...state
            }
        case actionTypes.FETCH_LOGIN_FAIL:
            return {
                ...state,

            }

        default:
            return state
    }
}

export default authReducer
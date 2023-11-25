import actionTypes from "../actions/actionTypes";

const initState = {
    posts: {},
    loadingPost: false,
    error: false
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_POST_START:
            return {
                ...state,
                loadingPost: true
            }
        case actionTypes.CREATE_POST_SUCCESS:
            return {
                ...state,
                loadingPost: false,
                posts: action.data
            }
        case actionTypes.CREATE_POST_FAIL:
            return {
                ...state,
                loadingPost: false,
                error: true,
            }
        default:
            return state
    }
}

export default postReducer
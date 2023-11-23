import actionTypes from "../actions/actionTypes";

const initState = {
    token: '',
    user: '',
    loading: false,
    error: false,
    isLogin: false,

}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_LOGIN_SUCCESS:

            return {
                ...state,
                loading: false,
                token: action.data.token,
                user: action.data.user,
                isLogin: true,
            }
        case actionTypes.FETCH_LOGIN_FAIL:

            return {
                ...state,
                loading: false
            }
        case actionTypes.FETCH_REGISTER_START:

            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_REGISTER_SUCCESS:

            return {
                ...state,
                loading: false,
                token: action.data.token,
                user: action.data.user,
                isLogin: true,
            }
        case actionTypes.FETCH_REGISTER_FAIL:

            return {
                ...state,
                loading: false
            }
        case actionTypes.FOLLOW_USER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FOLLOW_USER_SUCCESS:
            const { followers } = state.user
            const { status, id } = action.data
            console.log(status, id)
            if (status === 'follow') {
                followers.push(action.data.id)
            }
            if (status === 'unfollow') {
                const index = followers.indexOf(id)
                followers.splice(index, 1)
            }
            console.log(followers)
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    followers
                }
            }
        case actionTypes.FOLLOW_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case actionTypes.LOG_OUT:
            return {
                ...state,
                user: {},
                token: '',
                isLogin: false
            }
        case actionTypes.UPDATE_USER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.data
            }
        case actionTypes.UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default authReducer
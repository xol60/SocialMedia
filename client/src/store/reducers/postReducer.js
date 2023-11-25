import actionTypes from "../actions/actionTypes";

const initState = {
    posts: [],
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
            const posts = state.posts
            posts.push(action.data)
            return {
                ...state,
                loadingPost: false,
                posts
            }
        case actionTypes.CREATE_POST_FAIL:
            return {
                ...state,
                loadingPost: false,
                error: true,
            }
        case actionTypes.GET_POSTS_START:
            return {
                ...state,
                loadingPost: true
            }
        case actionTypes.GET_POSTS_SUCCESS:

            return {
                ...state,
                loadingPost: false,
                posts: action.data
            }
        case actionTypes.GET_POSTS_FAIL:
            return {
                ...state,
                loadingPost: false,
                error: true,
            }
        case actionTypes.CHANGE_POSTS_START:
            return {
                ...state,
                loadingPost: true
            }
        case actionTypes.CHANGE_POSTS_SUCCESS:
            const { status, idUser, idPost } = action.data
            const nposts = state.posts
            const index = nposts.findIndex(post => post._id === idPost)

            if (status === 'like') {
                nposts[index].likes.push(idUser)
            }
            if (status === 'dislike') {
                const indexl = nposts[index].likes.indexOf(idUser)
                nposts[index].likes.splice(indexl, 1)
            }
            console.log(nposts[index])
            return {
                ...state,
                loadingPost: false,
                posts: nposts
            }
        case actionTypes.CHANGE_POSTS_FAIL:
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
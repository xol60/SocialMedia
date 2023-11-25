import axios from '../axios/axios.js'
export const createPost = (data) => {
    return axios.post('/post/create', { ...data })
}
export const getPosts = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.get('/post/get-posts')
}

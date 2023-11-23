import axios from '../axios/axios.js'
export const getFollowing = async (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.get('/user/get-following')
}
export const statusChange = async ({ token, id }) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.put(`/user/${id}/status-change`)
}
export const updateNewUser = async ({ token, data }) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.put(`/user/update-user`, data)
}
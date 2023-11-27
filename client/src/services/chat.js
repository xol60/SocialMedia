import axios from '../axios/axios.js'
export const getChats = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.get('/chat/get')
}
export const getChat = (id) => {
    return axios.get(`/chat/${id}/get-chat`)
}
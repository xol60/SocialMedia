import axios from '../axios/axios.js'
export const getChats = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.get('/chat/get')
}
import axios from '../axios/axios.js'
export const getMessages = (id) => {
    return axios.get(`/message/${id}`)
}
export const createMessage = ({ data, token }) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.post('/message/create', { ...data })
}
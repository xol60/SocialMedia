import axios from '../axios/axios.js'
export const logIn = (data) => {
    return axios.post('/auth/login', { ...data })
}
export const register = (data) => {
    return axios.post('/auth/register', { ...data })
}
import axios from '../axios/axios.js'
export const logIn = (data) => {
    return axios.get('/auth/login', { ...data })
}
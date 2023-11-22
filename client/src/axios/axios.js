import axios from "axios";

const instance = axios.create({
    baseURL: process.env.URL_BACKEND,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance
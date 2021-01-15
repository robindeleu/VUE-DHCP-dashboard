import axios from 'axios';

export default () => {
    // const hostname = process.env.VUE_APP_BACKEND_HOST
    let api = axios.create({
        // baseURL: 'http://localhost:8081',
        // baseURL:`https://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}`,
        baseURL:`https://${process.env.VUE_APP_BACKEND_HOST}`,
        // baseURL: process.env.VUE_APP_BACKEND_HOST,
        withCredentials: true
    });
    console.log(".env hostname: ",`https://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}`)
    console.log("connected to: ", `https://${process.env.VUE_APP_BACKEND_HOST}`)
    return api
};
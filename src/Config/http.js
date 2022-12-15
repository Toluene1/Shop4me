import axios from "axios";
import { config } from "localforage";


const http = axios.create({
    baseURL: "https://fakestoreapi.com"
})

http.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
export default http;
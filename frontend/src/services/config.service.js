import axios from "axios";

//import.meta.env.VITE_REACT_APP_backend_URL
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/'
});
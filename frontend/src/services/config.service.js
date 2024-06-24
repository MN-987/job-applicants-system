import axios from "axios";

//import.meta.env.VITE_REACT_APP_backend_URL
/* 
note if yor enocounter error while testing with jest 
you need to hardocde the url in the axios instance
e.g replace baseURL: process.env.REACT_APP_BACKEND_URL with 
baseURL: 'http://localhost:5000/api/'

or process.env.REACT_APP_BACKEND_URL
*/
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_backend_URL
});
import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:import.meta.env.MODE_ENV === "production" ? "/api" : "http://localhost:3000/api",
    withCredentials:true
})
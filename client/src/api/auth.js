import axios from "./axios.js"
const API = "http://localhost:4000/api/";
export const registerRequest = user => axios.post(`Resgister`,user)
export const loginRequest = user => axios.post(`Login`,user)
export const verifyTokenRequest = () => axios.get(`Auth/verify`)
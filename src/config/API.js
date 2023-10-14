import axios from 'axios'

export const API_URL = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
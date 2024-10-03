// utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL // API base URL
  // You can add more default settings here
});

export default axiosInstance;

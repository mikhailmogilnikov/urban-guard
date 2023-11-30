import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const localAxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

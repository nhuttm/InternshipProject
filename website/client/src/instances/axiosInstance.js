import axios from 'axios';

let config = {
    baseURL: 'http://localhost:2000/api',
    timeout: 2000
};

let axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('user_token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
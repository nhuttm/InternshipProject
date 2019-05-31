import axios from 'axios';

let config = {
    baseURL: 'http://localhost:2000/api',
    timeout: 2000
};

let axiosInstance = axios.create(config);

export default axiosInstance;
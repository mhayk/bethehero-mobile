import axios from 'axios';

const api = axios.create({
    // This IP you should get from the expo - Metro Bundler
    baseURL: 'http://192.168.86.179:3333'
});

export default api;
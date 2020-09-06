import axios from 'axios';

const instance = axios.create({
    baseURL: '/vue-advanced-api/',
    timeout: 10000
});

export default instance;

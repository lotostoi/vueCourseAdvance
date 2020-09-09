import axios from 'axios';

const instance = axios.create({
    baseURL: '/vue-advanced-api/',
    timeout: 10000
});

export function addResponseHandler(onSuccess, onError) {

    instance.interceptors.response.use(onSuccess, onError);
    
}

export default instance;

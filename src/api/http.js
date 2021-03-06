import axios from 'axios';

import { getAccessToken, setTokens } from "@/utils/tokens"

const instance = axios.create({
    baseURL: '/vue-advanced-api-l3/',
    timeout: 10000
});


instance.interceptors.request.use(addAccessToken) 



instance.interceptors.response.use( 
    request => request,
    async error => {

        // it isn'i error saccess
        if (error.response.status !== 401) {
            return Promise.reject(error)
        }

        let responce = await instance.get('auth/refresh/refresh.php')

        // wasn't refresh token
        if (!responce.data.res) {
            
            return Promise.reject(error)
        }

        setTokens(responce.data.accessToken)

     
        return axios(addAccessToken(error.config));

    }
 )

export function addResponseHandler(onSuccess, onError) {

    instance.interceptors.response.use(onSuccess, onError);

}

export default instance;

function addAccessToken(request) {
    let accessToken = getAccessToken();

    if (accessToken !== null) {
        request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
}


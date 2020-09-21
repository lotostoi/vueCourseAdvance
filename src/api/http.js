import axios from 'axios';

import { getAccessToken, setTokens } from "@/utils/tokens"

const instance = axios.create({
    baseURL:  'http://localhost/VueCourse/',
    timeout: 10000,
    withCredentials: true
});


instance.interceptors.request.use(addAccessToken) 



instance.interceptors.response.use( 
    request => request,
    async error => {
        console.log(error);
        
        if (!('response' in error) || !(error.response)  || !('config' in error) || !('errorSuppression' in error.config)) {

			return Promise.reject(error);
		}

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


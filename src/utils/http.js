import axios from 'axios';

import { getAccessToken, setTokens } from "@/utils/tokens"




export default () => {


    const instance = axios.create({

        baseURL: 'https://wp.dmitrylavrik.ru/vue-advanced-api-l3/',
        timeout: 10000,
        withCredentials: true

    });

    instance.interceptors.request.use(addAccessToken)
     instance.interceptors.response.use(
        request => request,
        error => {
            if (error.response === undefined) {
                error.response = { status: 0 }
            }
            return Promise.reject(error)
        }
      
        
    )

    instance.interceptors.response.use(
        request => {
          
            return request},

        async error => {

          //  console.log(error.response)
            if (!('response' in error) || !(error.response) || !('config' in error) || !('errorSuppression' in error.config)) {

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



    return instance;
}



function addAccessToken(request) {
    let accessToken = getAccessToken();

    if (accessToken !== null) {
        request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
}


// import Axios, { AxiosResponse } from 'axios';

// const instance = Axios.create({
//     baseUrl: '/api',
//     timeout: 1000,
//     headers: {
//         "Authorizaion": "Bearer ",
//     },
// });

// const responseBody = (AxiosResponse) => AxiosResponse.data;

// export const request = {
//     get: (url) => instance.get(url).then(responseBody),
//     post: (url, body) => instance.post(url, body).then(responseBody),
//     put: (url, body) => instance.put(url, body).then(responseBody),
//     delete: (url) => instance.delete(url).then(responseBody),
// }

import Axios from "axios";

const request = Axios.create({
    baseUrl: "/api"
});

request.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    response => {
        const res = response.data;
        return res;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default request;
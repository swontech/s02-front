import Axios from 'axios';

const instance = Axios.create({
    baseUrl: '/api',
    timeout: 1000,
    headers: {
        "Authorizaion": "Bearer ",
    },
});

const responseBody = (response) => response.data;

export const request = {
    get: (url) => instance.get(url).then(responseBody),
    post: (url, body) => instance.get(url, body).then(responseBody),
    put: (url, body) => instance.get(url, body).then(responseBody),
    delete: (url) => instance.get(url).then(responseBody),
}
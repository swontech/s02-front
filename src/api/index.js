import Axios from "axios";
import jsCookie from "js-cookie";

const instance = Axios.create({
    baseURL: "/api/rest/v1",
    headers: {
        'Authorization': "Bearer ",
    },
    timeout: 3000,
    withCredentials: true,
});

/**
 * axios interceptor
 */
instance.interceptors.request.use(
    config => {
        const token = jsCookie.get("ACCESS_TOKEN");
        if(token !== undefined) {
            config.headers.Authorization += token;
        }
        return config;
    },
    error => {
        // TODO[]: 에러 처리
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // TODO[]: 에러 처리
        return Promise.reject(error);
    }
);

export default instance;
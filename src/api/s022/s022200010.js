import request from '../index.js';
import axios from 'axios';

export const retrieveAPI = async (body) => {

    const targetUrl = "/api/s022200010/retrieve";
    // request.post(
    //     targetUrl,
    //     body,
    // );
    try {
        const { data } = await axios.post(targetUrl, body);
        return data;
    } catch(e) {
        console.log(e);
    }
};

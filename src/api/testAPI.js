import { request } from '.';

export const testAPI = (body) => {
    const targetUrl = "/api/s0221a0020/get";
    request.get(
        targetUrl,
        body
    );
};
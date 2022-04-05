import api from "..";
import Cookie from "js-cookie";

const targetUrlPrefix = "/s021200010";
export const S021200010API = {
    login: async(param) => {
        const response = await api.get(targetUrlPrefix + '/login', {
            params: {
                email: param.email,
                pwd: param.pwd
            }
        });
        if(response.status === 200) {
            const result = response.data.data;
            Cookie.set("ACCESS_TOKEN", result.accessToken);
        }
        return response.status;
    },
}
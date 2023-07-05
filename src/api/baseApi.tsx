import axios from "axios";
import { navigate } from "../App";
import { h } from "../help/help";

export const DOMAIN: string = "https://shop.cyberlearn.vn/api";
export const TOKEN: string = "accessToken";
export const USER_LOGIN: string = "USER_LOGIN";
export const STATE_CODE: { SUCCESS: number } = { SUCCESS: 200 };
export const GROUP_ID: string = "GP00";
export const TOKEN_CYBER: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I";


export class BaseApi {
    get = (url: string) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "GET",
        });
    };
    put = (data: {}, url: string) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "PUT",
            data,
        });
    };
    post = (data: {}, url: string) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "POST",
            data,
        });
    };
    delete = (url: string) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "DELETE",
        });
    };
}

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${h.localStorage.get(TOKEN)}`;
        config.headers.TokenCybersoft = TOKEN_CYBER;
        // console.log(config);

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log("bắt lỗi chung", error);
        // navigate("/home");
        return Promise.reject(error);
    }
);

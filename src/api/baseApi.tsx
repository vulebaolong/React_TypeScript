import axios from "axios";

export const DOMAIN:string = "https://shop.cyberlearn.vn/api";
export const TOKEN:string = "accessToken";
export const USER_LOGIN:string = "USER_LOGIN";
export const STATE_CODE:{} = { SUCCESS: 200 };
export const GROUP_ID:string = "GP00";
export const TOKEN_CYBER:string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I";


const storedData = localStorage.getItem(TOKEN);
const parsedData: string | null = storedData ? JSON.parse(storedData) : null;

export class BaseApi {
    get = (url: string) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${parsedData}`,
                TokenCybersoft: TOKEN_CYBER,
            },
        });
    };
    put = (data:{}, url:string) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "PUT",
            data,
            headers: {
                Authorization: `Bearer ${parsedData}`,
                TokenCybersoft: TOKEN_CYBER,
            },
        });
    };
    post = (data:{}, url:string) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "POST",
            data,
            headers: {
                Authorization: `Bearer ${parsedData}`,
                TokenCybersoft: TOKEN_CYBER,
            },
        });
    };
    delete = (url:string) => {
        return axios({
            url: `${DOMAIN}${url}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${parsedData}`,
                TokenCybersoft: TOKEN_CYBER,
            },
        });
    };
}

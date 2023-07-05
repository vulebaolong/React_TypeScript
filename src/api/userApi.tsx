import { BaseApi } from "./baseApi";
class UserApi extends BaseApi {
    register = (data: {}) => {
        return this.post(data, `/Users/signup`);
    };
    login = (data: {}) => {
        return this.post(data, `/Users/signin`);
    };
    getProfile = (data: {}) => {
        return this.post(data, `/Users/getProfile`);
    };
}

export const userApi = new UserApi();

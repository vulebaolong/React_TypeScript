import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../store";
import { userApi } from "../../api/userApi";
import { STATE_CODE, TOKEN, USER_LOGIN } from "../../api/baseApi";
import { navigate } from "../../App";
import { h } from "../../help/help";

export interface UserLoginType {
    email: string;
}

export interface OrdersHistory {
    orderDetail: OrderDetail[];
    id: number;
    date: Date;
    status: null;
    email: string;
    alias: string;
}

export interface OrderDetail {
    name: string;
    alias: string;
    shortDescription: string;
    quantity: number;
    price: number;
    image: string;
    description: string;
}

export interface ProfileType {
    ordersHistory: OrdersHistory[];
    email: string;
    name: string;
    password: null;
    gender: boolean;
    phone: string;
    facebookId: string;
    deleted: boolean;
    avatar: string;
    image: string;
}

export interface UserStateType {
    userLogin: UserLoginType;
    accessToken: string;
    profile: ProfileType | null;
}

const initialState: UserStateType = {
    userLogin: {
        email: h.localStorage.get(USER_LOGIN) ? h.localStorage.get(USER_LOGIN) : "",
    },
    accessToken: "",
    profile: null,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        registerREDU: (
            state: UserStateType,
            action: PayloadAction<{ email: string; accessToken: string }>
        ) => {
            const { payload } = action;
            state.userLogin.email = payload.email;
            state.accessToken = payload.accessToken;
        },
        loginREDU: (
            state: UserStateType,
            action: PayloadAction<{ email: string; accessToken: string }>
        ) => {
            const { payload } = action;
            state.userLogin.email = payload.email;
            state.accessToken = payload.accessToken;
            h.localStorage.set(USER_LOGIN, payload);
            h.localStorage.set(TOKEN, payload.accessToken);
        },
        getProfileREDU: (state: UserStateType, action: PayloadAction<ProfileType>) => {
            const { payload } = action;
            state.profile = payload;
        },
    },
});

export const { registerREDU, loginREDU, getProfileREDU } = userSlice.actions;

export default userSlice.reducer;

// =======================MID ========================
//registerMID
export const registerMID = (requestData: {}) => {
    return async (dispatch: DispatchType) => {
        try {
            const { data, status } = await userApi.register(requestData);
            console.log("registerMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: status`);
            navigate("/login");
            // dispatch(registerREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

//loginMID
export const loginMID = (requestData: {}) => {
    return async (dispatch: DispatchType) => {
        try {
            const { data, status } = await userApi.login(requestData);
            console.log("loginMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: status`);
            dispatch(loginREDU(data.content));
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };
};

//getProfileMID
export const getProfileMID = (requestData: {}) => {
    return async (dispatch: DispatchType) => {
        try {
            const { data, status } = await userApi.getProfile(requestData);
            console.log("getProfileMID", { data, status });
            if (status !== STATE_CODE.SUCCESS) throw new Error(`status: status`);
            dispatch(getProfileREDU(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};

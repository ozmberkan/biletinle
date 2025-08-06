import { api } from "@/axios/axios";

let PATH = "/auth"

export const loginService = async(email:string, password: string) => {
    return await api.post(`${PATH}/login`, { email, password });
}

export const registerService = async(email: string, password: string, fullName: string, phoneNumber: string) => {
    return await api.post(`${PATH}/register`, { email, password, fullName, phoneNumber });
}

export const logoutService = async() => {
    return await api.post(`${PATH}/logout`);
}

export const getMyProfileService = async() => {
    return await api.get(`${PATH}/getMyProfile`);
}
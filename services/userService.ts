import { api } from "@/axios/api";

let PATH = "/user"

export const login = (data : { email: string; password: string }) => {
  return api.post(`${PATH}/login`, data)
}

export const register = (data : { email: string; password: string }) => {
  return api.post(`${PATH}/register`, data)
}

export const logout = () => {
  return api.post(`${PATH}/logout`)
}
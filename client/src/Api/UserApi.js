//בדף זה נשלח בקשות לשרת

import axios from "axios";//אובייקט חכם שיודע לשלוח בקשות לשרת
import { update } from "react-spring";

let baseUrl = "http://localhost:8000/user";

export const RegisterUserToServer = (user) => {
    console.log(user)
    return axios.post(`${baseUrl}/register`, user)
}

export const loginApi = (data) => {
    return axios.post(`${baseUrl}/login` , data)
}

export const postUser = (newUser) =>{
    return axios.post(`${baseUrl}/postUser`, newUser)//הוספת שיעור
}

export const putUser = (id, update) =>{
    return axios.put(`${baseUrl}/putUser/${id}`, update)//עדכון שיעור
}

export const deleteUser = (id) =>{
    return axios.delete(`${baseUrl}/deleteUser/${id}`)//מחיקת שיעור
}
//בדף זה נשלח בקשות לשרת

import axios from "axios";//אובייקט חכם שיודע לשלוח בקשות לשרת

let baseUrl = "http://localhost:8000/hfrashaH";


export const getHafrasha = () => {
    return axios.get(`${baseUrl}/getHafrasha`)//שליפת כל השיעורים
}

export const postHafrasha = (newHafrasha) =>{
    return axios.post(`${baseUrl}/postHafrasha`, newHafrasha)//הוספת שיעור
}

export const putHafrasha = (id, update) =>{
    return axios.put(`${baseUrl}/putHafrasha/${id}`, update)//עדכון שיעור
}

export const deleteHafrasha = (id) =>{
    return axios.delete(`${baseUrl}/deleteHafrasha/${id}`)//מחיקת שיעור
}
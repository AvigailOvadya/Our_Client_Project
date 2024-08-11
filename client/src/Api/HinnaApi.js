//בדף זה נשלח בקשות לשרת

import axios from "axios";//אובייקט חכם שיודע לשלוח בקשות לשרת

let baseUrl = "http://localhost:8000/hinna";


export const getHinna = () => {
    // alert("hnmgsdvfhfhdhgbkjtr")
    return axios.get(`${baseUrl}/getHinna`)//שליפת כל השיעורים
}

export const postHinna = (newHinna) =>{
    return axios.post(`${baseUrl}/postHinna`, newHinna)//הוספת שיעור
}

export const putHinna = (id, update) =>{
    return axios.put(`${baseUrl}/putHinna${id}`, update)//עדכון שיעור
}

export const deleteHinna = (id) =>{
    return axios.delete(`${baseUrl}/deleteHinna/${id}`)//מחיקת שיעור
}
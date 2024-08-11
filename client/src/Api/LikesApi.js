//בדף זה נשלח בקשות לשרת

import axios from "axios";//אובייקט חכם שיודע לשלוח בקשות לשרת

let baseUrl = "http://localhost:8000/lesson";


export const getLikesByUserId = (id) => {
    return axios.get(`${baseUrl}/getLessonsLike/${id}`)//שליפת כל השיעורים
}

export const postLike = (like) =>{
    return axios.post(`${baseUrl}/addLikeLesson`, like)//הוספת שיעור
}

export const putLike = (id, update) =>{
    return axios.put(`${baseUrl}/putLike/${id}`, update)//עדכון שיעור
}

export const deleteLike = (user , lesson) =>{
    return axios.delete(`${baseUrl}/${user}/${lesson}`)//מחיקת שיעור
}
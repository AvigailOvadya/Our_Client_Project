//בדף זה נשלח בקשות לשרת

import axios from "axios";//אובייקט חכם שיודע לשלוח בקשות לשרת

let baseUrl = "http://localhost:8000/lesson";


export const getAllLessonsApi = (id) => {
    console.log(id);
    return axios.get(`${baseUrl}/getLessons/${id}`)//שליפת כל השיעורים
}

// export const getAllLessonsApiByUserId = (id) => {
//     return axios.get(`${baseUrl}/getLessons/${id}`)//שליפת כל השיעורים
// }

export const postLesson = (newLesson) =>{
    return axios.post(`${baseUrl}/postLesson`, newLesson)//הוספת שיעור
}

export const putLesson = (id, update) =>{
    return axios.put(`${baseUrl}/putLesson/${id}`, update)//עדכון שיעור
}

export const deleteLesson = (id) =>{
    return axios.delete(`${baseUrl}/deleteLesson/${id}`)//מחיקת שיעור
}
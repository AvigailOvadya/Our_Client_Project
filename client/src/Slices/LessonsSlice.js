//דף זה מרנדם את התצוגה של הלקוח
//מקבל מדף API את הפונקציות שחוזרות מהשרת

import { createSlice } from "@reduxjs/toolkit"

const xLessons = {
    arr: []
}

const LessonsSlice = createSlice({
    name: "lessons_slice",
    initialState: xLessons,
    reducers: {
        // שליפה
        GetLessonFromRedux: (state, action) => {
            state.arr = action.payload
        },
        // הוספה
        AddLessonToRedux: (state, action) => {
            state.arr.push(action.payload);
        },
        // מחיקה
        DeleteLessonFromRedux: (state, action) => {
            let index = state.arr.findIndex(item => item.id == action.payload);
            state.arr.splice(index, 1);
        },
        // עדכון 
        UpdateLessonFromRedux: (state, action) => {
            state.arr = state.arr.map(item => {
                if (item.id == action.payload.id)
                    return action.payload
                return item
            })
        },
        deleteLikeRedux: (state, action) => {
            let index = state.arr.findIndex(lesson => lesson.id = action.payload);
            delete state.arr[index].like;
        },
        addLikeRedux: (state, action) => {
            let index = state.arr.findIndex(lesson => lesson.id = action.payload);
            state.arr[index].like = true;
        }
    }

})
export const { GetLessonFromRedux, AddLessonToRedux, DeleteLessonFromRedux, UpdateLessonFromRedux, deleteLikeRedux , addLikeRedux } = LessonsSlice.actions
export default LessonsSlice.reducer
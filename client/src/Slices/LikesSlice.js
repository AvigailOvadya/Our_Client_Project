//דף זה מרנדם את התצוגה של הלקוח
//מקבל מדף API את הפונקציות שחוזרות מהשרת

import { createSlice } from "@reduxjs/toolkit"

const xLikes = {
    arr: []
}

const LikesSlice = createSlice({
    name: "likes_slice",
    initialState: xLikes,
    reducers: {
        // הוספה
        AddLessonToLikesRedux: (state, action) => {
            alert("נוסףףףףףףףףףףףףףףףףףףף")
            let index = -1
            let like = { ...action.payload }
            if (state.arr != null)
                index = state.arr.findIndex(item => item.id == like.id)
            if (index == -1)
                like.qty = 1

            state.arr.push(action.payload);
        },
        // מחיקה
        DeleteLessonFromLikesRedux: (state, action) => {
            let index = state.arr.findIndex(item => item.id == action.payload);
            state.arr.splice(index, 1);
        }
        ,
        saveLikesRedux: (state, action) => {

            state.arr = action.payload;
        },
        addLikeInLikeSlice: (state, action) => {
            state.arr.push(action.payload);
        }
    }

})
export const { AddLessonToLikesRedux, DeleteLessonFromLikesRedux, saveLikesRedux , addLikeInLikeSlice} = LikesSlice.actions
export default LikesSlice.reducer
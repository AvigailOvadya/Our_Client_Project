//דף זה מרנדם את התצוגה של הלקוח
//מקבל מדף API את הפונקציות שחוזרות מהשרת

import { createSlice } from "@reduxjs/toolkit"

const xHinna = {
    arr: []
}

const HinnaSlice = createSlice({
    name: "hinna_slice",
    initialState: xHinna,
    reducers: {
        // שליפה
        GetHinnaFromRedux: (state, action) => {
            state.arr = action.payload
        },
        // הוספה
        AddHinnaToRedux: (state, action) => {
            state.arr.push(action.payload);
        },
        // מחיקה
        DeleteHinnaFromRedux: (state, action) => {
            let index = state.arr.findIndex(item => item.id == action.payload);
            state.arr.splice(index, 1);
        },
        // עדכון 
        UpdateHinnaToredux: (state, action) => {
            state.arr = state.arr.map(item => {
                if(item.id == action.payload.id)
                    return action.payload
                return item
            })
        }
    }
    
})
export const {GetHinnaFromRedux, AddHinnaToRedux, DeleteHinnaFromRedux, UpdateHinnaToredux} = HinnaSlice.actions
export default HinnaSlice.reducer
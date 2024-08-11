//דף זה מרנדם את התצוגה של הלקוח
//מקבל מדף API את הפונקציות שחוזרות מהשרת

import { createSlice } from "@reduxjs/toolkit"

const xHafrashatHalla = {
    arr: []
}

const HafrashatHallaSlice = createSlice({
    name: "HafrashatHalla_slice",
    initialState: xHafrashatHalla,
    reducers: {
        // שליפה
        GetHafrashatHallaFromRedux: (state, action) => {
            state.arr = action.payload
        },
        // הוספה
        AddHafrashatHallaToRedux: (state, action) => {
            state.arr.push(action.payload);
        },
        // מחיקה
        DeleteHafrashatHallaFromRedux: (state, action) => {
            let index = state.arr.findIndex(item => item.id == action.payload);
            state.arr.splice(index, 1);
        },
        // עדכון 
        UpdateHafrashatHallaToredux: (state, action) => {
            state.arr = state.arr.map(item => {
                if(item.id == action.payload.id)
                    return action.payload
                return item
            })
        }
    }
    
})
export const {GetHafrashatHallaFromRedux, AddHafrashatHallaToRedux, DeleteHafrashatHallaFromRedux,
              UpdateHafrashatHallaToredux} = HafrashatHallaSlice.actions
export default HafrashatHallaSlice.reducer
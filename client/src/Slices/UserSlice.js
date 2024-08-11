//דף זה מרנדם את התצוגה של הלקוח
//מקבל מדף API את הפונקציות שחוזרות מהשרת

import { createSlice } from "@reduxjs/toolkit"

const xUser = {
    // arr: [],
    user: null
}

const UserSlice = createSlice({
    name: "users_slice",
    initialState: xUser,
    reducers: {
        // שליפה
        loginUserFromRedux: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("userDorit" , JSON.stringify(state.user));
        },
        login2: (state, action) => {
            state.user = action.payload;
        },
        // הוספה
        AddUserToRedux: (state, action) => {
            state.user.push(action.payload);
        },
        // מחיקה
        logoutUserFromRedux: (state, action) => {
            state.user = null;
            localStorage.removeItem("userDorit");
        },
        // עדכון 
        UpdateUserToredux: (state, action) => {
            // state.user = state.user.map(item => {
            //     if (item.id == action.payload.id)
            //         return action.payload
            //     return item
            // })
            state.user = action.payload;
        },
        inUserImport: (state, action) => {
            state.user = action.payload;
            // localStorage.setItem("currentUser"), JSON.stringify(state.user);
        }
    }

})
export const { loginUserFromRedux, AddUserToRedux, logoutUserFromRedux, UpdateUserToredux, inUserImport ,login2 } = UserSlice.actions
export default UserSlice.reducer
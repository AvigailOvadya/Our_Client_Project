// import { configureStore } from "@testing-library/react";
import LikesSlice from "../Slices/LikesSlice";
import UserSlice from "../Slices/UserSlice";
import LessonsSlice from "../Slices/LessonsSlice";
import HinnaSlice from "../Slices/HinnaSlice";
import HafrashatHallaSlice from "../Slices/HafrashatHallaSlice";
import { configureStore } from "@reduxjs/toolkit";

//api - קריאות מהשרת
//slice - שינוי תצוגה בצד לקוח

export const store = configureStore({
    reducer: {
        user: UserSlice,
        lessons: LessonsSlice,
        hinna: HinnaSlice,
        HafrashatHalla: HafrashatHallaSlice,
        likes: LikesSlice
    }
})
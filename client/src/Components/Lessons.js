import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllLessonsApi } from "../Api/LessonsApi"
import { useDispatch, useSelector } from "react-redux";

export default function Lessons() {

    // let dispatch = useDispatch()
    // let arr = useSelector(state => state.Lessons.arr) //קבלת המערך 

    const [lessons, setLessons] = useState([]);
    
    return <div>
        <p>שיעורים</p>
        <Stack spacing={2} direction="row" margin={5}>
            <Button variant="outlined"><Link to="/ShiyureyHizuk">  שיעורי חיזוק  </Link></Button>
            <Button variant="outlined"><Link to="/Different">  שיעורים שונים  </Link></Button>
            <Button variant="outlined"><Link to="/Empowerment">  העצמה  </Link></Button>
            {/* <Button variant="outlined"><Link to="/Deadlines">  שיעורים לפי מועדים  </Link></Button> */}
        </Stack>

        <div>
            {/* {lessons.map(l =>
                <div>
                    <p>{l.lessonname}</p>
                    <video style={{ width: "20vw", height: "10vh" }} src={"http://localhost:8000/public/video/shiureyPSH/" + l.video} controls> </video>
                </div>)
            } */}
        </div>
    </div>
}
// export const { useEffect } = useEffectLesson
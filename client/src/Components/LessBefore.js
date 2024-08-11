import { useDispatch, useSelector } from "react-redux";
import "./LessBefore.css";
import { useEffect, useState } from "react";
import { getAllLessonsApi } from "../Api/LessonsApi"
import { GetLessonFromRedux } from "../Slices/LessonsSlice"
import OneLesson from "./OneLesson";

export default function LessBefore() {

    // let dispatch = useDispatch()
    // const [lessonBefore, setLessonBefore] = useState([])
    const lessonBefore = useSelector(st => st.lessons.arr);

    useEffect(() => {
        // console.log("useeffectttttttttt")
        // getAllLessonsApi().then((res) => {
        //     console.log("getAllLessonsApi")
        //     // dispatch(GetLessonFromRedux(res.data))
        //     // console.log(res.data)
        //     setLessonBefore(res.data);
        // }).catch(err => alert(err))
    }, [])

    // const fil = lessonBefore.filter(lessB => lessB.lesson_type == 4);

    return <div>
        <h1>שיעורים קודמים******</h1>

        <div>
            {
                lessonBefore.filter(lessB => lessB.lesson_type == 4).map(lessB =>
                    <div key={lessB.id}>
                        <OneLesson one={lessB} folder={"shiureyPS"} />
                        {/* <p>{lessB.lessonname}</p> */}
                        {/* <video style={{width:"20vw", height:"10vh"}} 
                            src={"http://localhost:8000/public/video/shiureyPSH/"+lessB.video} controls >
                        </video> */}
                    </div>
                )
            }
        </div>
    </div>
}
import { useEffect, useState } from "react";
import { getAllLessonsApi } from "../Api/LessonsApi"
import OneLesson from "./OneLesson";
import { useSelector } from "react-redux";

export default function Different() {

    // const [lessDifferent, setLessDifferent] = useState([])
    const lessDifferent = useSelector(st => st.lessons.arr);

    useEffect(() => {
        // console.log("useeffectttttttttt")
        // getAllLessonsApi().then((res) => {
        //     console.log("getAllLessonsApi")
        //     // dispatch(GetLessonFromRedux(res.data))
        //     // console.log(res.data)
        //     setLessDifferent(res.data);
        // }).catch(err => alert(err))
    }, [])

    return <div>
        <p>שיעורים שונים</p>

        <div>
            {
                lessDifferent.filter(lessD => lessD.lesson_type == 2).map(lessD =>
                    <div key={lessD.id}>
                        <OneLesson one = {lessD} folder = {"Different"} />
                        {/* <p>{lessB.lessonname}</p> */}
                        {/* <video style={{width:"20vw", height:"10vh"}} 
                            src={"http://localhost:8000/public/video/shiureyPSH/"+lessB.video} controls >
                        </video> */}
                    </div>
                )
            }
        </div>

        {/* <div>
        <video width="400" height="500" controls >
                <source src="./video/שיעורים שונים/כיפור.mp4" type="video/mp4" />
            </video>
            <video width="400" height="500" controls >
                <source src="./video/שיעורים שונים/ליל הושענה רבה.mp4" type="video/mp4" />
            </video>
            <video width="400" height="500" controls >
                <source src="./video/שיעורים שונים/סגולת רבי אלימלך.mp4" type="video/mp4" />
            </video>
            <video width="400" height="500" controls >
                <source src="./video/שיעורים שונים/ראש חודש אייר.mp4" type="video/mp4" />
            </video>
            <video width="400" height="500" controls >
                <source src="./video/שיעורים שונים/שירת הים.mp4" type="video/mp4" />
            </video>
            <video width="400" height="500" controls >
                <source src="./video/שיעורים שונים/תחיית המתים.mp4" type="video/mp4" />
            </video>
            <video width="400" height="500" controls >
                <source src="./video/שיעורים שונים/ראש חודש כסליו.mp4" type="video/mp4" />
            </video>
        </div> */}
    </div>
}
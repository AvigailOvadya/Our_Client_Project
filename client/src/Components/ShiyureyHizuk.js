import { useEffect, useState } from "react";
import { getAllLessonsApi } from "../Api/LessonsApi"
import OneLesson from "./OneLesson";
import { useSelector } from "react-redux";

export default function ShiyureyHizuk() {

    // const [lessHizuk, setLessHizuk] = useState([])
    const lessHizuk = useSelector(st => st.lessons.arr);
    // const user = useSelector(st=>st.user.arr[0]);

    useEffect(() => {
        // console.log("useeffectttttttttt")
        // getAllLessonsApi().then((res) => {
        //     console.log("getAllLessonsApi")
        //     // dispatch(GetLessonFromRedux(res.data))
        //     // console.log(res.data)
        //     setLessHizuk(res.data);
        // }).catch(err => alert(err))
    }, [])


    return <div>

        <div>
            {
                lessHizuk.filter(lessH => lessH.lesson_type == 1).map(lessH =>
                    <div key={lessH.id}>
                        <OneLesson one={lessH} folder = {"ShiyureyHizuk"} />
                        {/* <p>{lessB.lessonname}</p> */}
                        {/* <video style={{width:"20vw", height:"10vh"}} 
                            src={"http://localhost:8000/public/video/shiureyPSH/"+lessB.video} controls >
                        </video> */}
                    </div>
                )
            }
        </div>

        <p> שיעורי חיזוק </p>
        {/* <div>
            <video width="400" height="500" controls >
                <source src="./video/שיעורי חיזוק/אין ייאוש בעולם.mp4" type="video/mp4" />
            </video>
            <video width="400" height="500" controls >
                <source src="./video/שיעורי חיזוק/דברים - יאוש או תקוה.mp4" type="video/mp4" />
            </video>
            {/* <video width="400" height="500" controls >
                <source src="./video/שיעורים חיזוק/20210412_212955.mp4" type="video/mp4" />
            </video> */}
        {/* </div>  */}
    </div>
}
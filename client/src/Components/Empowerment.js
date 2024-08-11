import { useEffect, useState } from "react";
import { getAllLessonsApi } from "../Api/LessonsApi"
import OneLesson from "./OneLesson";
import { useSelector } from "react-redux";

export default function Empowerment(){

    // const [lessEmpowerment, setLessEmpowerment] = useState([])
    const lessEmpowerment = useSelector(st => st.lessons.arr);

    useEffect(() => {
        // console.log("useeffectttttttttt")
        // getAllLessonsApi().then((res) => {
        //     console.log("getAllLessonsApi")
        //     // dispatch(GetLessonFromRedux(res.data))
        //     // console.log(res.data)
        //     setLessEmpowerment(res.data);
        // }).catch(err => alert(err))
    }, [])


    return<div>
       <p> שיעורי העצמה</p>

       <div>
            {
                lessEmpowerment.filter(lessE => lessE.lesson_type == 3).map(lessE =>
                    <div key={lessE.id}>
                        <OneLesson one = {lessE} folder = {"Empowerment"} />
                        {/* <p>{lessB.lessonname}</p> */}
                        {/* <video style={{width:"20vw", height:"10vh"}} 
                            src={"http://localhost:8000/public/video/shiureyPSH/"+lessB.video} controls >
                        </video> */}
                    </div>
                )
            }
        </div>

          {/* <video width="400" height="500" controls >
              <source src="./video/שיעורי העצמה/הכח שבך.mp4" type="video/mp4" />
          </video>
          <video width="400" height="500" controls >
              <source src="./video/שיעורי העצמה/איך נמצא את מה שטוב בנו.mp4" type="video/mp4" />
          </video>
          <video width="400" height="500" controls >
              <source src="./video/שיעורי העצמה/הכח של אמא רחל.mp4" type="video/mp4" />
          </video> */}
    </div>
}
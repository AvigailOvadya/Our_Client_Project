import { useSelector } from "react-redux";
import OneLikes from './OneLikes';
import OneLesson from "./OneLesson";

const Likes = () => {

    
    let arrLikes = useSelector(state => state.likes.arr)



    return <div>
        <h3>הסרטונים שאהבתי</h3>
        {
            arrLikes && arrLikes.length > 0 &&
            arrLikes.map(i => <div key={i.id}><OneLesson one = {i} folder={"likes"} /> </div>)
        }

    </div>
}
export default Likes;
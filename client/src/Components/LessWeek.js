import { Link } from "react-router-dom";

export default function LessWeek() {
    return <div>
        <p>שיעורי פרשת שבוע</p>
        <video width="750" height="500" controls >
            {/* <source src="./video/שיעור פרשת שבוע/שיעור פרשת שבוע.mp4" type="video/mp4" /> */}
        </video><br></br><br></br>
        <Link to="/lessBefore">לשיעורים קודמים</Link><br></br>
        <Link to="/getAnAlert">לקבלת התראה במייל מידי שבוע</Link>
    </div>
}
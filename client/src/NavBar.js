import { Link } from "react-router-dom"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { logoutUserFromRedux } from "./Slices/UserSlice";

export default function NavBar() {

  const user = useSelector(st => st.user.user);
  const dispatch = useDispatch();

  return <div >
    <Stack spacing={2} direction="row">
      <Button id="button" variant="outlined"><Link to="about" className="wordbutton">אודות האתר</Link></Button>
      <Button id="button" variant="outlined"><Link to="addLesson" className="wordbutton">הוספת שיעור</Link></Button>
      <Button id="button" variant="outlined"><Link to="likes" className="wordbutton">מועדפים</Link></Button>
      <Button id="button" variant="outlined"><Link to="lessons" className="wordbutton">שיעורים</Link></Button>
      <Button id="button" variant="outlined"><Link to="lesWeek" className="wordbutton">שיעור פרשת שבוע</Link></Button>
      <Button id="button" variant="outlined"><Link to="HafrashatHalla" className="wordbutton">הפרשת חלה</Link></Button>
      <Button id="button" variant="outlined"><Link to="hinna" className="wordbutton">חינות</Link></Button>
      <Button id="button" variant="outlined"><Link to="trips" className="wordbutton">טיולים</Link></Button>

      {!user && <>
        <Button id="button" variant="outlined"><Link to="login" className="wordbutton">התחברות</Link></Button>
        <Button id="button" variant="outlined"><Link to="/registation" className="wordbutton">להרשמה</Link></Button></>
      }
      {
        user &&
        <Button id="button" variant="outlined"><Link onClick={() => {dispatch(logoutUserFromRedux()) }} className="wordbutton">exit</Link></Button>
      }
      {/* <Button id='conection' sx={{ width: 100, height: 50 }}>
        <Link to="login" id='wordconaction'>התחברות</Link>
      </Button>
      <Button id='enrollment-button' sx={{ width: 100, height: 50 }}>
        <Link to="/registation" id='wordenrollment'>להרשמה</Link>
      </Button> */}
    </Stack>
    {/* <Link to="homePage">דף הבית</Link> */}
  </div >
}
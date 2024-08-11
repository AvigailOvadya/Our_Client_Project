import { light } from '@mui/material/styles/createPalette';
import * as React from 'react';
import { Link } from "react-router-dom"
import { Button } from '@mui/material';
import './HomePage.css';

export default function HomePage() {


  return <div>
    <img id='goldright' src='../image/goldright.png' width={800} height={400} />
    <img id='goldleft' src='../image/goldleft.png' width={800} height={400} />
    <img id='imggroung' src="./image/מסגרת לתמונה.png" width={410} />
    <img id='imggroung1' src="./image/מסגרת לתמונה.png" width={410} />
    <img id='logo' src='./image/logo.png' width={380} />
    {/* <Button id='conection' sx={{ width: 100, height: 50 }}>
      <Link to="login" id='wordconaction'>התחברות</Link>
    </Button>
    <Button id='enrollment-button' sx={{ width: 100, height: 50 }}>
      <Link to="/registation" id='wordenrollment'>להרשמה</Link>
    </Button> */}
    {/* <img id='buckground' src='../image/buckground.png' width={2050} height={950} /> */}
    {/* <video width="400" height="500" controls >
      <source src="./image/logo_video.mp4" type="video/mp4" />
    </video> */}
    {/* <img id='logo' src='./image/logo.jpg' width={400} height={300}/> */}
    {/* <div id='colo'></div>
    <Link to="connection">התחברות</Link>
    <Link to="/Registration">להרשמה</Link> */}
    {/* <img src='./image/צילום מסך 2024-05-01 183235.png' width={1000} height={550} /> */}
  </div>
}
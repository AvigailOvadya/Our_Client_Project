import { Link } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
// import '../HinnaOrder.css';
import { Button } from "@mui/material";
import './Login.css';
import { useForm } from 'react-hook-form';
import { loginApi } from "../Api/UserApi";
import { useDispatch, useSelector } from 'react-redux';
import { loginUserFromRedux } from "../Slices/UserSlice";

export default function Login() {

    const { register, handleSubmit } = useForm();
    const dispath = useDispatch();

    const login = (data) => {
        loginApi(data)
            .then((res) => {
                if (res.data.length === 0) {
                    alert("error")
                    return;
                }
                alert("welcome " + res.data[0].username)
                dispath(loginUserFromRedux(res.data[0]))
            })
            .catch((error) => { })
    }

    return <div>
        <p>התחברות</p>
        <Stack className='orderbox' spacing={2} sx={{
            '& > :not(style)': {
                m: 1,
                width: 350,
                height: 350,
                boxShadow: 10,
                position: 'relative',
                left: 800,
                borderRadius: 12,
            },
        }}>
            <Paper variant="elevation">
                <form onSubmit={handleSubmit(login)}>
                    <TextField sx={{ margin: 1, top: 60 }} type="text" label="שם משתמש" variant="outlined" {...register("username")} />
                    <TextField sx={{ margin: 1, top: 60 }} type="password" label="סיסמא" variant="outlined" {...register("password")} /><br />
                    <Button variant="outlined" id="approve" sx={{ top: 100, textDecoration: 'none' }} type="submit">אישור</Button>
                </form>

            </Paper>
        </Stack>
        <p id="enrollment">
            עדיין לא רשום?
            <Link to="/enrollment" >  להרשמה</Link>
        </p>
        {/* <p>התחברות</p>
        <Stack className='orderbox' spacing={2} sx={{
            '& > :not(style)': {
                m: 1,
                width: 350,
                height: 350,
                boxShadow: 10,
                position: 'relative',
                left: 800,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            },
        }}>
            <Paper variant="elevation">
                <TextField sx={{ margin: 1, top: 60 }} type="text" label="שם משתמש" variant="outlined" />
                <TextField sx={{ margin: 1, top: 60 }} text="number" label="אימייל" variant="outlined" /><br />
                <Button variant="outlined" sx={{ top: 100 }}>התחברות</Button>
            </Paper>
        </Stack>
        <Link to="/Registration">להרשמה</Link> */}
    </div>
}
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RegisterUserToServer } from '../Api/UserApi';
import { inUserImport, loginUserFromRedux } from '../Slices/UserSlice';

export default function Registation() {
    const dispach = useDispatch();
    const nav = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm();
    
    const UserRegister = (user) => {
        console.log("userrr-",user)
        RegisterUserToServer(user).then((res) => {
            alert("נרשמת בהצלחה")
            nav("/HomePage")
            console.log(res)
            // dispach(inUserImport(res.data))
            dispach(loginUserFromRedux(res.data[0]))


        }).catch(eror => {
            alert("ההרשמה ניכשלה" + eror)
        })
    }

    return <form onSubmit={handleSubmit(UserRegister)}>
        <Stack className='orderbox' spacing={2} sx={{
            '& > :not(style)': {
                m: 1,
                width: 500,
                height: 500,
                boxShadow: 10,
                position: 'relative',
                left: 700,
                borderRadius: 12
            },
        }}>
            <Paper variant="elevation">
                <TextField sx={{ margin: 1, top: 60 }} type="text" label="שם מלא" variant="outlined"
                 {...register("name", {required: {value: true, message:"שדה חובה"}})} /><br />
                 {errors && errors.name && <span style={{color:"red"}}>{errors.name.message}</span>}<br />

                {/* <TextField sx={{ margin: 1, top: 60 }} text="Mail" label="שם משפחה" variant="outlined" 
                 {...register("lastname", {required: {value: true, message: "שדה חובה"}})}/><br />
                 {errors && errors.lastname && <span style={{color: "red"}}>{errors.lastname.message}</span>}<br /> */}

                 <TextField sx={{ margin: 1, top: 60 }} text="number" label="מספר טלפון" variant="outlined"
                 {...register ("number", {required: {value: true, message: "שדה חובה"}})}/><br />
                 {errors && errors.number && <span style={{color: "red"}}>{errors.number.message}</span>}<br />

                <TextField sx={{ margin: 1, top: 60 }} text="number" label="אימייל" variant="outlined"
                {...register ("email", {required: {value: true, message: "שדה חובה"}})}/><br />
                {errors && errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}<br /> 

                <TextField sx={{ margin: 1, top: 60 }}  type="text" label="סיסמה" variant="outlined"
                 {...register("password", { required: { value: true, message: "הכנס סיסמה" } })} /><br/>
                {errors && errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}<br/>

                <Button variant="outlined" type="submit" sx={{ top: 50 }}>אישור</Button>
            </Paper>
        </Stack>
    </form>
}
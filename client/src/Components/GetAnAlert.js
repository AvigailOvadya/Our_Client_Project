import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function GetAnAlert() {

  // קבלת התראה במייל //

    // let dispach = useDispatch();
    let { register, handleSubmit, formState: { errors, isValid } } = useForm();

   function saveEmail(){
    }

    return <form onSubmit={handleSubmit(saveEmail)}>
        <p>:בכדי לקבל התראה למייל מידי שבוע על כל שיעור שיוצא<br></br>
             עלייך להכניס את שמך המלא ומייל ונכניס אותך לקבוצה <br></br>
             בכדי להיכנס לקבוצה בוואטצפ הכניסי מספר טלפון</p>
             <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        {/* <label> :שם מלא</label> */}
        <TextField id="outlined-basic" label="שם משתמש" variant="outlined" 
            {...register("fullName", { 
            required: {valu: true, message: "זהו שדה חובה*"},
            maxLength: {value: 40, message: "שם ארןך מידי*"},
            pattern: { value: /^[a-zA-Zא-ת\s]+[a-zA-Zא-ת\s]+$/, message: "הכנס אותיות בלבד*" }})}/>
        {errors.fullName && <span>{errors.fullName.message}</span>}<br></br><br></br>
        {/* <label> :אימייל</label> */}
        <TextField id="outlined-basic" label="אימייל" variant="outlined" /><br></br><br></br>
        {/* <label> :מספר טלפון</label> */}
        <TextField id="outlined-basic" label="טלפון" variant="outlined" /><br></br><br></br>

        <input type="submit" value="אישור" />
        </Box>
    </form>
}
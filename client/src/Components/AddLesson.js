// import { useState } from 'react';
// import axios from 'axios';
// import OneLesson from './OneLesson';
// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const AddLesson = () => {

//     // const options = [
//     //     { label: 'The Godfather', id: 1 },
//     //     { label: 'Pulp Fiction', id: 2 },
//     //   ];
//     // or
//     const options = ['שיעורי חיזוק', 'שיעורים שונים', 'שיעורי העצמה', 'שיעורי פרשת שבוע'];

//     const [video, setVideo] = useState(null);
//     const [lessonDetails, setLessonDetails] = useState({
//         lessonname: '',
//         lesson_type: '',
//         date: '',
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setLessonDetails({ ...lessonDetails, [name]: value });
//     };

//     const handleFileChange = (e) => {
//         setVideo(e.target.files[0]);
//       };

//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append('video', video);
//         formData.append('lessonname', lessonDetails.lessonname);
//         formData.append('lesson_type', lessonDetails.lesson_type);
//         formData.append('date', lessonDetails.date);

//         try {
//             const response = await axios.post('http://localhost:8000/addLesson', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log('File uploaded successfully:', response.data);
//         } catch (error) {
//             console.error('Error uploading file:', error);
//         }
//     };

//     // const handleChange = (e) => {
//     //     setVideo(e.target.files[0]);
//     // };

//     // const handleUpload = async () => {
//     //     const formData = new FormData();
//     //     formData.append('video', video);

//     //     try {
//     //         const response = await axios.post('http://localhost:8000/AddVideo', formData, {
//     //             headers: {
//     //                 'Content-Type': 'multipart/form-data',
//     //             },
//     //         });
//     //         console.log(response.data);
//     //     } catch (error) {
//     //         console.error('Error uploading video:', error);
//     //     }
//     // };

//     return <div>
//         <h4>הוספת שיעור</h4>

//         <Box
//             component="form"
//             sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             <TextField id="outlined-basic" label="שם השיעור" variant="outlined" name="lessonName"
//                 value={lessonDetails.lessonName}
//                 onChange={handleInputChange} /><br></br><br></br>

//             {/* <TextField type='date' id="standard-basic" label="תאריך" variant="standard" /> */}

//             <Autocomplete
//                 disablePortal
//                 id="combo-box-demo"
//                 options={options}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => <TextField {...params} label="קטגורייה"
//                     value={lessonDetails.lesson_type}
//                     onChange={handleInputChange} />} />

//             <TextField type='date' id="outlined-basic" label="תאריך" variant="outlined"
//                 value={lessonDetails.date}
//                 onChange={handleInputChange} /><br></br><br></br>

//         </Box>

//         <div>
//             <input type="file" accept="video/*" onChange={handleFileChange} />
//             <br></br><br></br>
//             <button onClick={handleUpload}>הוסף סרטון</button>
//         </div>


//         {/* <Button variant="contained" disableElevation>
//             הוסף סרטון
//         </Button> */}

//     </div>
// }
// export default AddLesson;
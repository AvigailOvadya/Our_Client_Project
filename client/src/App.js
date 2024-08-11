import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import { Routes, Route, json } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Components/Login';
import Registation from './Components/Registation';
import HafrashatHalla from './Components/HafrashatHalla';
import Lessons from './Components/Lessons';
import LessWeek from './Components/LessWeek';
import Trips from './Components/Trips';
import Hinna from './Components/Hinna';
import Empowerment from './Components/Empowerment';
import ShiyureyHizuk from './Components/ShiyureyHizuk';
import Different from './Components/Different';
import About from './Components/About';
import LessBefore from './Components/LessBefore';
import GetAnAlert from './Components/GetAnAlert';
import Likes from './Components/Likes';
import AddLesson from './Components/AddLesson';
import { useEffect } from 'react';
import { getAllLessonsApi, getAllLessonsApiByUserId } from './Api/LessonsApi';
import { GetLessonFromRedux } from './Slices/LessonsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getLikesByUserId } from './Api/LikesApi';
import { saveLikesRedux } from './Slices/LikesSlice';
import { login2, loginUserFromRedux } from './Slices/UserSlice';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(st => st.user.user);
  const userStorage = localStorage.getItem("userDorit");

  useEffect(() => {

    if(userStorage)
      dispatch(login2(JSON.parse(userStorage)))

    let id = user ? user.Id : null;
    console.log(id);
    getAllLessonsApi(id)
      .then((res) => {
        dispatch(GetLessonFromRedux(res.data))
        console.log(res.data)
      })
      .catch(err => console.log(err))
    if (user) {
      getLikesByUserId(user.Id)
        .then((res) => { 
          dispatch(saveLikesRedux(res.data))
         })
        .catch((error) => { })
    }
  }, [])

  return (
    <div className="App">
      {user && user.username
      }
      {/* <HomePage /> */}
      <NavBar />
      <Routes>

        <Route path='login' element={<Login />} />

        <Route path='registation' element={<Registation />} />

        <Route path='lesWeek' element={<LessWeek />} />

        <Route path='lessBefore' element={<LessBefore />} />

        <Route path='getAnAlert' element={<GetAnAlert />} />

        <Route path='lessons' element={<Lessons />} />

        <Route path='HafrashatHalla' element={<HafrashatHalla />} />

        <Route path='hinna' element={<Hinna />} />

        <Route path='trips' element={<Trips />} />

        <Route path='ShiyureyHizuk' element={<ShiyureyHizuk />} />

        <Route path='different' element={<Different />} />

        <Route path='empowerment' element={<Empowerment />} />

        {/* <Route path='deadlines' element={<Deadlines />} /> */}

        <Route path='about' element={<About />} />

        <Route path='likes' element={<Likes />} />

        <Route path='addLesson' element={<AddLesson />} />

        <Route path='' element={<HomePage />} />


      </Routes>
    </div>
  );
}

export default App;

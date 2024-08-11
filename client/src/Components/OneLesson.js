import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import "./Lesson.css";
import { AddLessonToLikesRedux, addLikeInLikeSlice, DeleteLessonFromLikesRedux } from "../Slices/LikesSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { deleteLike, postLike } from '../Api/LikesApi';
import { addLikeRedux, deleteLikeRedux } from '../Slices/LessonsSlice';

export default function OneLesson({ one, folder }) {

  let dispatch = useDispatch();
  const user = useSelector(st => st.user.user);

  let [ColorRed, setColorRed] = useState(false);

  React.useEffect(() => {
    console.log(one)
    if (one.like || folder == "likes")
      setColorRed(true);
  }, [])

  return <div>

    <Card sx={{
      maxWidth: 345,
      margin: 3,
      width: 280,
      float: "right",
      // direction: "rtl",
      flex: "flex",
      flexWrap: "wrap",
    }}>
      <CardMedia className='card_video' sx={{
        height: 230,
        width: 250,
        alignItems: "center",
        // position: "relative"
      }}
        type="video/mp4"
        component="video"
        // alt={one.lessonname}
        src={`http://localhost:8000/public/video/${folder}/${one.video}`} controls
      />

      {/* <video style={{width:"20vw", height:"10vh"}} 
          src={`http://localhost:8000/public/video/${folder}/${one.video}`} controls >
        </video> */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {one.lessonname}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>

      <CardActions>
        {
          ColorRed ? <IconButton aria-label="add to favorites">
            <Grid container sx={{ color: "red", alignItems: 'center' }}>
              <Grid item xs={8}>
                <FavoriteIcon value="add to likes"
                  onClick={() => {
                    deleteLike(user.Id, one.id)
                      .then((res) => {
                        dispatch(deleteLikeRedux(one.id));
                        dispatch(DeleteLessonFromLikesRedux(one.id));
                        setColorRed(false)
                      })
                      .catch((error) => { })
                  }}
                />
              </Grid>
            </Grid>
          </IconButton> :
            <IconButton aria-label="add to favorites">
              <Grid container sx={{ color: "black", alignItems: 'center' }}>
                <Grid item xs={8}>
                  <FavoriteBorderIcon value="add to likes"
                    onClick={() => {
                      let like = {
                        userId: user.Id,
                        lessonId: one.id
                      }
                      postLike(like)
                        .then((res) => {
                          dispatch(addLikeRedux(one.id));
                          dispatch(addLikeInLikeSlice(one))
                          setColorRed(true);
                        })
                        .catch((error) => { })

                    }}
                  />
                </Grid>
              </Grid>
            </IconButton>
        }

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>

  </div>
}
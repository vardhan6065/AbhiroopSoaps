import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import { ClassNames } from '@emotion/react';
// import img3 from '../assets/soapimages/img3.jpg';
import classes from './MediaCard.module.css';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 330 , maxHeight: 400 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={props.img}
          alt="green iguana"
          sx={{ maxWidth: 400 , maxHeight: 300 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <div className={classes['card-bottom']}>
        <span>21.34 Rs</span>
        <span>+-</span>
      </div> */}
    </Card>
  );
}

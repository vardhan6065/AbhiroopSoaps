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
    <Card sx={{ maxWidth: 330 , maxHeight: 450 }} >
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
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardContent>
        <div className={classes.details}>
          <div className={classes.quantity}>
            <span>132.2 Rs</span>
          </div>
          <div className={classes.actions}>
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

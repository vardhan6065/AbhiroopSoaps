import React from "react";
import img1 from '../assets/homeimages/img1.jpg';
import img2 from '../assets/homeimages/img2.jpg';
import classes from './Image1.module.css';

const Image1 = (props) =>{
    return (
        <div className={classes.images}>
            <div className={classes.images}>
                <img src={img1} alt='img1' className={classes.image}/>
                <img src={img2} alt='img2' className={classes.image}/>
            </div>
         </div>
    )
};

export default Image1;
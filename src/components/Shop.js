import React from 'react';
import classes from './Shop.module.css';
// import {Fragement} from 'react';
import MediaCard from '../UI/MediaCard.js';
import img1 from '../assets/soapimages/img1.jpg';
import img2 from '../assets/soapimages/img2.jpg';
import img3 from '../assets/soapimages/img3.jpg';
import img4 from '../assets/soapimages/img4.jpg';
import img5 from '../assets/soapimages/img5.jpg';
import img6 from '../assets/soapimages/img6.jpg';
import img7 from '../assets/soapimages/img7.jpg';
import img8 from '../assets/soapimages/img8.jpg';
import img9 from '../assets/soapimages/img9.jpg';
import { SoapsInfo } from '../assets/SoapsInfo';

const Shop = () =>{

    const informationArray=SoapsInfo;

    return (
    <React.Fragment>



        {/* <MediaCard img={soapinfo[0].linktoImage}/> */}
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img1}
                content={informationArray[0].content}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img2}
                
                content={informationArray[0].content}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img3}
                content={informationArray[0].content}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img4}
                content={informationArray[0].content}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img5}
                content={informationArray[0].content}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img6}
                content={informationArray[0].content}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img7}
                content={informationArray[0].content}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img8}
                content={informationArray[0].content}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={img9}
                content={informationArray[0].content}
                />
            </div>
            
    </React.Fragment>
    )    
}

export default Shop;
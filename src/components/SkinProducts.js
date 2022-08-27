import React from 'react';
import classes from './SkinProducts.module.css';
// import {Fragement} from 'react';
import MediaCard from '../UI/MediaCard.js';
import aloeveragel from '../assets/soapimages/aloeveragel.jpg';
import charcoalscrub from '../assets/soapimages/charcoalscrub.jpg';
import facepack from '../assets/soapimages/facepack.jpg';
import facepack1 from '../assets/soapimages/facepack1.jpg';
import strawberrylipbalm from '../assets/soapimages/strawberrylipbalm.jpg';
import vanillalipbalm from '../assets/soapimages/vanillalipbalm.jpg';
import { CreamInfo } from '../assets/CreamInfo.js';

const SkinProducts = () =>{

    const informationArray=CreamInfo;

    return (
    <React.Fragment>
        {/* <MediaCard img={soapinfo[0].linktoImage}/> */}
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={aloeveragel}
                content={informationArray[0].content}
                title={informationArray[0].title}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={charcoalscrub}
                content={informationArray[1].content}
                title={informationArray[1].title}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={facepack}
                content={informationArray[0].content}
                title={informationArray[2].title}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={facepack1}
                content={informationArray[0].content}
                title={informationArray[3].title}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={strawberrylipbalm}
                content={informationArray[0].content}
                title={informationArray[4].title}
                />
            </div>
            <div className={classes.mediacarddiv}>
                <MediaCard
                img={vanillalipbalm}
                content={informationArray[0].content}
                title={informationArray[5].title}
                />
            </div>
    </React.Fragment>
    )    
}

export default SkinProducts;
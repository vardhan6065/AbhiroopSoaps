import React from "react";
// import Home from './Home.js';
import SoapShop from './SoapShop.js';
import SkinProducts from './SkinProducts.js';
// import { useState } from "react";
import classes from './Container.module.css';
import { useSelector } from 'react-redux';
import SorryFile from "./SorryFile.js";


const Container=(props)=>{

    const soapsIsShown = useSelector(state => state.isShowingSoaps);
    const skinProductsIsShown = useSelector(state => state.isShowingSkinProducts);


    // const [homeIsVisible,setHomeIsVisible] = useState(false);
    // const [shopIsVisible,setShopIsVisible] = useState(true);
  

    return (
        <div className={classes.container}>
            {/* {homeIsVisible && !shopIsVisible && <Home/>}
            {shopIsVisible && !homeIsVisible && <Shop/>} */}
            {soapsIsShown && !skinProductsIsShown && <SoapShop/>}
            {!soapsIsShown && skinProductsIsShown && <SkinProducts/>}
            <div>{!soapsIsShown && !skinProductsIsShown && <SorryFile/>}</div>
        </div>
    );
}

export default Container;
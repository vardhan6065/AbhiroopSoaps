import React from "react";
// import Home from './Home.js';
import SoapShop from './SoapShop.js';
import SkinProducts from './SkinProducts.js';
// import { useState } from "react";
import classes from './Container.module.css';
import { useSelector } from 'react-redux';
import SorryFile from "./SorryFile.js";


const Container=(props)=>{

    const soapsIsShown = useSelector(state => state.ui.soapsIsVisible);
    const skinProductsIsShown = useSelector(state => state.ui.skinProductsIsVisible);
    const sorryTextIsShown = useSelector(state => state.ui.sorryTextIsVisible);

    return (
        <div className={classes.container}>
            {soapsIsShown && <SoapShop/>}
            {skinProductsIsShown && skinProductsIsShown && <SkinProducts/>}
            {sorryTextIsShown && <div className='sorrytext'><SorryFile/></div>}
        </div>
    );
}

export default Container;
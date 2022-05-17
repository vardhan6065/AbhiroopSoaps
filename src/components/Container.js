import React from "react";
// import Home from './Home.js';
import Shop from './Shop.js';
// import { useState } from "react";
import classes from './Container.module.css';

const Container=(props)=>{
    // const [homeIsVisible,setHomeIsVisible] = useState(false);
    // const [shopIsVisible,setShopIsVisible] = useState(true);
  

    return (
        <div className={classes.container}>
            {/* {homeIsVisible && !shopIsVisible && <Home/>}
            {shopIsVisible && !homeIsVisible && <Shop/>} */}
            <Shop/>
        </div>
    );
}

export default Container;
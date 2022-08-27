import React from "react";
import classes from "./Home.module.css";
import img1 from "../assets/homeimages/img1.jpg";
import img2 from "../assets/homeimages/img2.jpg";
import Image1 from "./Image1";
import Content from "./Content.js";

const Home = (props) =>{
    return (
        <div className={classes.homecontainer}>
            {/* <div className={classes.home1} >
                <img src={img1} className={classes.home1images}></img>
                <img src={img2} className={classes.home1images}></img>     
            </div> */}
            <Image1/>
            {/* <div className={classes.home2}>
                <div className={classes.template}>
                    <h2>Source</h2>
                    <p>All products are made from naturally found products. </p>
                </div>
                <div className={classes.template}>
                    <h2>Ingredients</h2>
                    <p>An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled</p>
                </div>
                <div className={classes.template}>
                    <h2>Variety</h2>
                    <p>An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled</p>
                </div>
            </div> */}
            <Content/>
            <div className={classes.extra}></div>
        </div>
    )
}

export default Home;
import classes from './DropOption.module.css';
import React from "react";

const DropOption=(props)=>{
    return (
        <p className={classes.dropOption}>{props.val}</p>
    );
}

export default DropOption;
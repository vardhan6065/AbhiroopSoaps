import React from 'react';
import classes from './options.module.css';
import DropOption from './DropOption.js';

const Options=(props)=>{
    return(
    <React.Fragment>
    <DropOption className={classes.options} val="Shop"/>
    <DropOption className={classes.options} val="Home"/>
    <DropOption className={classes.options} val="Contact Us"/>
    </React.Fragment>
    );
}

export default Options;
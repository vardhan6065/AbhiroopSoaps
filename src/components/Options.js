import React from 'react';
import classes from './options.module.css';
import DropOption from './DropOption.js';
import { useDispatch } from 'react-redux';
import { mainareacontentActions } from '../store/mainareacontent-slice';

const Options=()=>{
    const dispatch = useDispatch();

    const shopHandler =()=>{
        dispatch(mainareacontentActions.showShop());
    }
    const homeHandler =()=>{
        dispatch(mainareacontentActions.showHome());
    }
    // const contactHandler =()=>{
    //     dispatch(mainareacontentActions.showContact());
    // }

    return(
    <React.Fragment>
        <span className={classes.dropOption} onClick={shopHandler}>Shop</span>
        <span className={classes.dropOption} onClick={homeHandler}>Home</span>
        <span className={classes.dropOption} >Contact Us</span>
        <span className={classes.dropOption} >Cart</span>
    </React.Fragment>
    );
}

export default Options;
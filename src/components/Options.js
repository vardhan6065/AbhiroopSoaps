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
        <p className={classes.dropOption} onClick={shopHandler}>Shop</p>
        <p className={classes.dropOption} onClick={homeHandler}>Home</p>
        <p className={classes.dropOption} >Contact Us</p>
    </React.Fragment>
    );
}

export default Options;
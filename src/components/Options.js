import React from 'react';
import classes from './options.module.css';
import Button from '@mui/material/Button';
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
    const cartHandler =()=>{
        dispatch(mainareacontentActions.showCart());
    }

    return(
    <React.Fragment>
        {/* <span className={classes.dropOption} onClick={shopHandler}>Shop</span> */}
        {/* <span className={classes.dropOption} onClick={homeHandler}>Home</span> */}
        <div className={classes.options}>
            <Button onClick={homeHandler}><a>Home</a></Button>
            <Button  onClick={shopHandler}><a>Shop</a></Button>
            <Button><a>Contact Us</a></Button>
            <Button onClick={cartHandler}><a>Cart</a></Button>
        </div>
    </React.Fragment>
    );
}

export default Options;
import * as React from 'react';
// import Button from '@mui/material/Button';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import classes from './Sidebar.module.css';
import { useDispatch } from 'react-redux';
import {uiActions} from '../store/ui-slice';

// const categories = ["Soaps","Skin Products","Shampoo & Conditioner","Hair Serum","Scrub","Face Wash"];


export default function Sidebar(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  // const showSoapHandler = () =>{
  //   dispatch({ type: 'showSoaps' });
  // }

  // const showSkinProductHandler = () =>{
  //   dispatch({ type: 'showSkinProducts' });
  // }

  // const showSorryHandler = () =>{
  //   dispatch({ type: 'showSorryText' });
  // }

  const soapHandler =()=>{
    dispatch(uiActions.showSoaps());
  }
  const sorryTextHandler =()=>{
    dispatch(uiActions.showSorryText());
  }
  const skinProductHandler =()=>{
    dispatch(uiActions.showSkinProducts());
  }

  return (
    <Stack direction="row" spacing={2} >
      <Paper className={classes.options}>
        <MenuList>
           {/* {categories.map(product=>
              <MenuItem>{product}</MenuItem>
           )} */}
           <MenuItem onClick={soapHandler}>Soaps</MenuItem>
           <MenuItem onClick={skinProductHandler}>Skin Products</MenuItem>
           <MenuItem onClick={sorryTextHandler}>Shampoo & Conditioner</MenuItem>
           <MenuItem onClick={sorryTextHandler}>Hair Serum</MenuItem>
           <MenuItem onClick={sorryTextHandler}>Scrub</MenuItem>
           <MenuItem onClick={sorryTextHandler}>Face Wash</MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}

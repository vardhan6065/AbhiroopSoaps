// import logo from './logo.svg';
// import './App.css';
import React, { Fragment } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import classes from './App.css';
import Sidebar from './components/Sidebar';
import SorryFile from './components/SorryFile';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import wp from './assets/wp.jpg';
import Cart from './components/Cart/Cart';


function App() {
  const contentAtContainer = useSelector(state => state.ui.sorryTextIsVisible);
  const mainAreaShop = useSelector(state => state.mainareacontent.shopIsVisible);
  const mainAreaHome = useSelector(state => state.mainareacontent.HomeIsVisible);
  const mainAreaContact = useSelector(state => state.mainareacontent.contactIsVisible);
  const mainAreaCart = useSelector(state => state.mainareacontent.cartIsVisible);
  
  const shop=<div className='content'>
                <div className='sidebar'>
                  <Sidebar/>
                </div>
                <div className='container'> 
                  {!contentAtContainer && <Container/>}
                  {contentAtContainer && <div className={'sorryfile'}><SorryFile /></div>}
                </div>
              </div>;

  

  return (
    // <div className="App">
    <Fragment>
      <Header/>
      {mainAreaShop && shop}
      {mainAreaHome && <Home/>}
      {mainAreaCart && <Cart className={classes.cart}/>}
      <a className='wp-chat' href="https://wa.me/918010510288" target='_blank'><img src={wp}></img></a>
      </Fragment>  
    // </div>
  );
}

export default App;

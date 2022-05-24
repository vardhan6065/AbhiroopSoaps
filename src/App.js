// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import classes from './App.css';
import Sidebar from './components/Sidebar';

function App() {


  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='container'> 
          <Container/>
        </div>
      </div>
    </div>
  );
}

export default App;

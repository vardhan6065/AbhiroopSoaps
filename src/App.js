// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import classes from './App.css';

function App() {


  return (
    <div className="App">
      <Header/>
      <div className='container'>
      <Container/>
      </div>
    </div>
  );
}

export default App;

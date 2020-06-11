import React from 'react';
import {Button} from '@material-ui/core';
import {Container} from '@material-ui/core';
import NavBar from './components/NavBar'
import SubAmounts from './components/SubAmounts';
import Amounts from './components/Amounts';
import InputSection from './components/InputSection';
import './App.css';

function App() {

  return (
    <div className="App">
      <Container maxWidth="sm" id="container">
        <NavBar/>
        <Amounts/>
        <SubAmounts/>
        <InputSection/>
      </Container>
    </div>
  );
}

export default App;

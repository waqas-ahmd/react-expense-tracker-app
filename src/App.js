import React from 'react';
import {Container} from '@material-ui/core';
import NavBar from './components/NavBar'
import SubAmounts from './components/SubAmounts';
import Amounts from './components/Amounts';
import InputSection from './components/InputSection';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalContext';
import './App.css';

function App() {

  return (
    <GlobalProvider>
    <div className="App">
      <Container maxWidth="sm" id="container">
      <NavBar className="nav-bar"/>
        <Amounts/>
        <SubAmounts/>
        <InputSection/>
        <div className="list-title">Transactions History</div>
        <TransactionList/>
      </Container>
    </div>
    </GlobalProvider>
  );
}

export default App;

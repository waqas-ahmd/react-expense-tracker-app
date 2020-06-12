import React, { useContext } from 'react';
import './Amounts.css';
import { GlobalContext } from '../context/GlobalContext';

function Amounts() {

  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
  return (  
    <div id = "your-balance">
    <div>Your Balance:</div>
  <div id="total-amount">{"$"+total}</div>
  </div>
  );
}

export default Amounts;

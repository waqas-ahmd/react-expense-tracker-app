import React, {useContext} from 'react';
import './SubAmounts.css';
import { GlobalContext } from '../context/GlobalContext';


function SubAmounts(){

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item>0).reduce((a,b) => (a+=b),0).toFixed(2);
    const expense = (amounts.filter(item => item<0).reduce((a,b) => (a+=b),0)*(-1)).toFixed(2);

    return(
        <div className="container">
            <div className="one amounts">
            <div className="sub-title">Total Earnings</div>
            <div className="sub-amount">{"$" + income}</div>
            </div>
            <div className="two amounts">
            <div className="sub-title">Total Expenses</div>
            <div className="sub-amount">{"$" + expense}</div>
            </div>
          </div>
    )
}

export default SubAmounts;
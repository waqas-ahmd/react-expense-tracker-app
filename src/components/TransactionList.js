import React, { useContext } from 'react';
import './TransactionList.css';
import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transactions'

function TransactionList(){

    const {transactions} = useContext(GlobalContext);

    return(
            
        <div className="list-main">
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}

export default TransactionList;
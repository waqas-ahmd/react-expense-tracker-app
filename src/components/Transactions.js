import React, { useContext } from 'react';
import "./Transactions.css"
import { GlobalContext } from "../context/GlobalContext";

function Transaction({transaction}){

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount<0 ? "-" : "+";
    const [hide,setHide] = React.useState(true);
    
    return(
        <li onMouseOver={() => setHide(prevMode => !prevMode)} onMouseOut={() => setHide(prevMode => !prevMode)} className={"item "+ (transaction.amount <0 ? "minus" : "plus")}>
            <span className="itm-name">{transaction.text}</span>
            <span className="itm-amount">{sign + "$" + Math.abs(transaction.amount)} <span onClick={() => {deleteTransaction(transaction.id)}} className={"noselect delete-btn " + (hide? "hidden" : "") }>X</span></span>
        </li>
    )
}

export default Transaction;
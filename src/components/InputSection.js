import React, {useContext} from 'react';
import {Button} from '@material-ui/core';
import './InputSection.css';
import { GlobalContext } from '../context/GlobalContext';

var globalId = 1000;

function InputSection(){

    const [text, setText] = React.useState("");
    const [amount, setAmount] = React.useState(null);

    const { addTransaction } = useContext(GlobalContext);

    const Submit = e => {
        e.preventDefault();
        globalId = globalId + 1;
        if(isNaN(amount)){
            setAmount(0);
        }
        const newTransaction = {
            id: globalId,
            text,
            amount : Number(amount) 
        }
        if(newTransaction.amount !== 0){
            addTransaction(newTransaction);
            setText("");
            setAmount("");
        }
    }

    return(
        <div id="input-div">
        <form onSubmit = {Submit}>
        <div id="input-title">Add New Earning (+ve) or Expense (-ve)</div>
      <input value={text} onChange={(e) => {setText(e.target.value)}}  id="input-name" type="text" placeholder="Enter Transaction Name"></input>
      <div className="input-container">
          <div id="input-one" ><input value={amount} onChange={(e) => {setAmount(e.target.value)}} id="input-amount" type="number" placeholder="Enter Transaction Amount"></input></div>
          <div id="input-two"><Button type={Submit} id="input-button"  variant="contained" color = "primary">Add</Button></div>
      </div>
      </form>
    </div>
    )
}

export default InputSection;

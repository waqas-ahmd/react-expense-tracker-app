import React from 'react';
import {Button} from '@material-ui/core';
import './InputSection.css';

function InputSection() {

  return (
    <div id="input-div">
        <div id="input-title">Add New Earning (+ve) or Expense (-e)</div>
      <input id="input-name" type="text" placeholder="Enter Transaction Name"></input>
      <input id="input-amount" type="number" placeholder="Enter Transaction Amount"></input>
      <Button id="input-button" variant="contained" color = "primary">Add</Button>
    </div>
  );
}

export default InputSection;

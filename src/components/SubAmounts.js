import React from 'react';
import './SubAmounts.css';

function SubAmounts(){
    return(
        <div class="container">
            <div class="one amounts">
            <div className="sub-title">Earnings</div>
            <div className="sub-amount">$300</div>
            </div>
            <div class="two amounts">
            <div className="sub-title">Expenses</div>
            <div className="sub-amount">$300</div>
            </div>
          </div>
    )
}

export default SubAmounts;
import React from 'react';
import {AppBar} from '@material-ui/core';
import './NavBar.css';

function NavBar() {

  return (
        <AppBar position="static" id="appbar">
          <div className="title">EXPENSE TRACKER APP</div>
        </AppBar>
  );
}

export default NavBar;

import React from 'react';
import {
  withRouter
} from "react-router-dom";
import { Button } from '@material-ui/core';

import './App.css';

function Home(props) {
  
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary"
         onClick={() => props.history.push('/nasa') }>
          Nasa Engineer
        </Button>

        <br/>

        <Button variant="contained" color="primary"
         onClick={() => props.history.push('/kid') }>
          Kid
        </Button>
      </header>

    </div>
  );
}

export default withRouter(Home);

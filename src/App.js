import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import { Button } from '@material-ui/core';
import Home from './Home';
import NasaEngineer from './NasaEngineer';
import Kid from './Kid';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/nasa">
            <NasaEngineer />
          </Route>
          <Route path="/kid">
            <Kid />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

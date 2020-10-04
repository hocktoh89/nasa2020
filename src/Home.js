import React from 'react';
import {
  withRouter
} from "react-router-dom";
import { Button } from '@material-ui/core';
import home from './images/home.png'
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import './App.css';


const useStyles = makeStyles((theme) => ({
  container: {
    height: '600px'
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div className="App">
        <Container className={classes.container}>
          <img className={classes.img} alt="home" src={home} />
        </Container>

        <Button variant="contained" color="primary"
         onClick={() => props.history.push('/kid') }>
          Become an engineer
        </Button>
        <br/>   <br/>
        <Button color="primary"
         onClick={() => props.history.push('/nasa') }>
          Log in as Nasa Engineer
        </Button>
    </div>
  );
}

export default withRouter(Home);

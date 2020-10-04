import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import achievement from "./images/achievement.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";
import avatar from "./images/kidAvatar.jpg";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function Achievement(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={() => props.history.goBack()}
            >
              <ArrowBackIcon />
            </IconButton>
            <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
          </Toolbar>
        </AppBar>
          <img className={classes.img} alt="home" src={achievement} />
        </Grid>
      </Paper>
    </div>
  );
}

export default withRouter(Achievement);

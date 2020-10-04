import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import avatar from "./images/avatar.jpg";

import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import ChatBubble from "react-chat-bubble";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
  container: {
    height: '600px'
  }
}));

function Chat(props) {
  const classes = useStyles();

  const [navBarValue, setNavBarValue] = useState("recents");

  const handleNavBarChange = (event, newValue) => {
    setNavBarValue(newValue);
  };

  const messages = [
    {
      type: 0,
      text: "Dear Baltimore Sun, My name is Jack and I would like to do this project. I maybe nine years old but I think I would be a good fit for this project. One of the reason is my sister says I can become Nasa engineer also I have seen all the space movies. I am young so I can learn to think like Nasa engineer.",
    },
    {
      type: 1,
      text: "Hello! Good Afternoon!",
    },
  ];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              
            >
              <ArrowBackIcon />
            </IconButton>
            <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
          </Toolbar>
        </AppBar>
        <Container className={classes.container}>
        <ChatBubble messages={messages} />
        </Container>

      </Paper>
    </div>
  );
}

export default withRouter(Chat);

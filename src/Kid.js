import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { projectList } from "./data/kidProjects";
import robot from "./images/robot.png";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";
import avatar from "./images/kidAvatar.jpg";

import Paper from "@material-ui/core/Paper";
import {
  withRouter
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    minHeight: 300,
    height: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  avatar: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

function Kid(props) {
  const classes = useStyles();

  const [navBarValue, setNavBarValue] = useState("recents");

  const handleNavBarChange = (event, newValue) => {
    setNavBarValue(newValue);
  };

  return (
    <div className={classes.root}>
            <Paper className={classes.paper}>
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
      <List component="nav" aria-label="main mailbox folders">
        {projectList &&
          projectList.map((project) => (
            <ListItem>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {project.descriptions}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    className={classes.media}
                    image={project.image}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary"
                    onClick={() => props.history.push('/project-details') }
                  >
                    Try it now
                  </Button>
                </CardActions>
              </Card>
            </ListItem>
          ))}
      </List>

      <BottomNavigation
        value={navBarValue}
        onChange={handleNavBarChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          value="recents"
          onClick={() => props.history.push('/') }
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Favourite"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="User"
          icon={<PermIdentityIcon 
          onClick={() => props.history.push("/achievement")}
          />}
        />
      </BottomNavigation>
      </Paper>
    </div>
  );
}

export default withRouter(Kid);

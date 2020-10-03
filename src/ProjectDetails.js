import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import ButtonBase from '@material-ui/core/ButtonBase';
import Divider from "@material-ui/core/Divider";
import robot from "./images/robot.png";
import labFlasks from "./images/labFlasks.png";
import brain from "./images/brain.png";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import ListItemIcon from "@material-ui/core/ListItemIcon";


import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import { Button } from '@material-ui/core';

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
}));
function ProjectDetails(props) {
  const classes = useStyles();

  const [navBarValue, setNavBarValue] = useState("recents");

  const handleNavBarChange = (event, newValue) => {
    setNavBarValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <img className={classes.img} alt="complex" src={robot} />
            <Typography gutterBottom variant="h5" component="h1">
              Science Experiments: Elephant's Toothpaste
            </Typography>
            <Typography variant="body2" color="textSecondary">
              If this is your first time programming your own robot or you just
              want to investigate something apart from Arduino robot kits,
              you’re in the right place. There several starter and STEM robotics
              kits available varying from Lego Mindstorms and Meccano Spiders to
              Micro Bit powered buggy’s that can be programmed in Python.
            </Typography>
          </Grid>
        </Grid>

        <List>
          <ListItem>
            <ListItemIcon>
              <img src={labFlasks} width="80" height="80" />
            </ListItemIcon>
            <ListItemText
              primary="Key Concept"
              secondary={
                <>
                  <Typography variant="body2">
                    Chemistry
                    <br />
                    Biology
                    <br />
                    Reaction
                    <br />
                    Catalyst
                    <br />
                    Surface tension
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <img src={brain} width="80" height="80" />
            </ListItemIcon>
            <ListItemText
              primary="Key Concept"
              secondary={
                <>
                  <Typography variant="body2">
                    Chemistry
                    <br />
                    Biology
                    <br />
                    Reaction
                    <br />
                    Catalyst
                    <br />
                    Surface tension
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <img src={labFlasks} width="80" height="80" />
            </ListItemIcon>
            <ListItemText
              primary="Key Concept"
              secondary={
                <>
                  <Typography variant="body2">
                    Chemistry
                    <br />
                    Biology
                    <br />
                    Reaction
                    <br />
                    Catalyst
                    <br />
                    Surface tension
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>


        <Button 
             shape="round"
            variant="contained" color="primary"
         onClick={() => props.history.push('/kid') }>
          Join
        </Button>

        <BottomNavigation
        value={navBarValue}
        onChange={handleNavBarChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Home"
          value="recents"
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
          icon={<PermIdentityIcon />}
        />
      </BottomNavigation>
      </Paper>
    </div>
  );
}

export default ProjectDetails;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import engineerA from "./images/engineerA.jpg";

import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

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
}));

function JoinProject(props) {
  const classes = useStyles();

  const [navBarValue, setNavBarValue] = useState("recents");

  const handleNavBarChange = (event, newValue) => {
    setNavBarValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography gutterBottom variant="h5" component="h1">
          Congratulations!
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          We found a Nasa engineer to work with you
        </Typography>

        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={engineerA}
            title="Picture of Engineer"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              Meet Baltimore Sun
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              Electrical Engineer
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              He handle a remarkable variety of challenges, including payload
              electronics, data-handling subsystems, motor control electronics &
              test equipment, and avionics & flight subsystems. We develop,
              design, engineer, fabricate, package, and analyze everything.
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>

        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.history.push("/chat")}
        >
          Send a message
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.history.push("/project-details")}
        >
          Not Now
        </Button>

        <BottomNavigation
          value={navBarValue}
          onChange={handleNavBarChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Home"
            value="recents"
            onClick={() => props.history.push("/kid")}
            icon={<HomeIcon />}
          />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Favourite" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="User" 
            icon={<PermIdentityIcon />} 
            onClick={() => props.history.push("/achievement")}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default withRouter(JoinProject);

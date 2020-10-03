import React from "react";
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
import {projectList} from './data/kidProjects';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 140,
  },
}));

function Kid() {
  const classes = useStyles();

  
   return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
      {projectList && projectList.map
      ( project => 
        <ListItem>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {project.descriptions}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                src="./images/robot.png"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Try it now
              </Button>
            </CardActions>
          </Card>
        </ListItem>)
        }
      </List>
    </div>
  );
}

export default Kid;

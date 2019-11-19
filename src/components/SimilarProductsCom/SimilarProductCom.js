import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-around",
    // overflow: "hidden",
    // paddingBottom: 20,
    // marginBottom: 20,
    // backgroundColor: theme.palette.background.paper
    height: 360
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  media: {
    height: 140,
    width: 175,
    "@media (min-width:738px)": {
      height: 140,
      width: 480
    }
  }
}));

export default function TitlebarGridList({ image }) {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Grid spacing={2} container xs={12} justify="center" alignItems="center">
      <Grid item xs={6}>
        <Card className={classes.card}>
          <Link to={`/products/${"single"}`}>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
          </Link>
        </Card>
      </Grid>
      <Grid item xs={6}>
        {" "}
        <Card className={classes.card}>
          <Link to={`/products/${"single"}`}>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
          </Link>
        </Card>
      </Grid>
      <Grid item xs={6}>
        {" "}
        <Card className={classes.card}>
          <Link to={`/products/${"single"}`}>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
          </Link>
        </Card>
      </Grid>
      <Grid item xs={6}>
        {" "}
        <Card className={classes.card}>
          <Link to={`/products/${"single"}`}>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
          </Link>
        </Card>
      </Grid>
    </Grid>
    // </div>
  );
}

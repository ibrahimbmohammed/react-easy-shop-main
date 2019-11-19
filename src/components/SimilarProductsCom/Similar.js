import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: 20
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,

    height: 150
  },
  media: {
    height: "100%",
    width: "100%",
    zIndex: 3
  }
}));

export default function NestedGrid({ image }) {
  const classes = useStyles();

  function FormRow() {
    return (
      <>
        <Grid item xs={6}>
          {" "}
          <Link to={`/products/${"single"}`}>
            <Paper className={classes.paper}>
              <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
              />{" "}
            </Paper>{" "}
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Link to={`/products/${"single"}`}>
              <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
              />{" "}
            </Link>
          </Paper>
        </Grid>
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid> */}
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
        {/* <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}

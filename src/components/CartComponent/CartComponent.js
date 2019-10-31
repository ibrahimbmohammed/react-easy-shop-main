import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import pic from "../../images/minified (4).jpg";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    border: "2px solid black"
  },
  check: {
    marginTop: -30,
    transform: "translateX(30px)"
  },
  check2: {
    marginTop: -50,

    transform: "translateY(-10px)",
    transform: "translateX(30px)"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Grid container spacing={1} xs={12}>
          <Grid item xs={4}>
            <img className={classes.img} alt="complex" src={pic} />
            {/* <CardMedia
              className={classes.media}
              src={pic}
              title="Contemplative Reptile"
            /> */}
          </Grid>
          <Grid item direction="column" xs={4}>
            {" "}
            <Typography gutterBottom variant="p" component="h5">
              This is a sheet of paper.
            </Typography>
            <Typography variant="p" component="h5">
              NGN ₦5000
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            container
            className={classes.check}
            alignItems="flex-start"
            justify="flex-end"
          >
            <IconButton className={classes.button} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
          {/*return */}
          <Grid
            direction="row"
            xs={12}
            container
            className={classes.check2}
            item
            justify="flex-end"
          >
            <Grid item>
              <IconButton className={classes.button} aria-label="delete">
                <ExpandLess />
              </IconButton>
              <IconButton className={classes.button} aria-label="delete">
                <ExpandMore />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

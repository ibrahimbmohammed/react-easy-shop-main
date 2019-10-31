import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    height: 100
  },
  image: {
    width: 128,
    height: 128,
    border: "1px solid blue"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    border: "1px solid red"
  },
  textgrid: {
    border: "1px solid purple"
  },
  textgrid2: {
    border: "1px solid green"
  },
  textgrid2: {
    border: "1px solid brown"
  },
  textgrid0: {
    border: "1px solid yellow"
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container xs={12} spacing={2} className={classes.textgrid0}>
        <Grid xs={4} item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt="complex"
              src="/static/images/grid/complex.jpg"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={4} sm container className={classes.textgrid}>
          <Grid
            item
            xs
            container
            direction="column"
            className={classes.textgrid2}
            spacing={2}
          >
            <Grid item>
              <Typography gutterBottom variant="p" component="h5">
                Standard license
              </Typography>
              <Typography variant="p" component="h5" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="p" component="h5" color="textSecondary">
                ID: 1030114
              </Typography>
            </Grid>
            {/* <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid> */}
          </Grid>
          <Grid
            xs={4}
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
            item
            className={classes.textgrid3}
          >
            <IconButton className={classes.button} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  card: {
    width: 140,
    height: 140,
    position: "relative",
    "@media (min-width: 1024px)": {
      width: 150,
      height: 150,
      transform: "translateX(10%)"
    }
  },
  media: {
    width: "100%",
    height: "100%"
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white"
  },
  overlay2: {
    position: "absolute",
    // display: "block",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: " rgba(0,0,0,0.5)",
    zIndex: 2,
    cursor: "pointer"
  },
  HeadingText: {
    "@media (min-width: 724px)": {
      opacity: 0
    }
  }
});

export default function MediaCard({ image, name }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={`/product/${name}`} name={name}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />

        <div className={classes.overlay2}>
          <div className={classes.overlay}>
            {" "}
            <Typography
              className={classes.HeadingText}
              // gutterBottom
              variant="h6"
              component="h5"
            >
              {name}
            </Typography>
          </div>
        </div>
      </Link>
    </Card>
  );
}

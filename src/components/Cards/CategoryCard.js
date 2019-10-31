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
      </Link>
    </Card>
  );
}

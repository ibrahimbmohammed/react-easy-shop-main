import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function ImgMediaCard({ image }) {
  const classes = useStyles();

  return (
    <Link to={`/products/${"single"}`}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="h4">
            Lizard
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

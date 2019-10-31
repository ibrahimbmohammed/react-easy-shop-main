import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../../Theme/MuiTheme";

const useStyles = makeStyles({
  ...styles,
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard({ image }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.CardCont}>
        <Typography gutterBottom variant="p" component="h4">
          Chiganvy
        </Typography>
        <Typography variant="p" component="h6">
          NGN ₦5000
        </Typography>
      </CardContent>
    </Card>
  );
}

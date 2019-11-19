import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../../Theme/MuiTheme";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  ...styles,
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  CardText: {
    fontWeight: "light",
    fontSize: 11,
    fontFamily: " Montserrat",
    fontStyle: " normal",
    fontWeight: " normal",
    fontSize: "10px",
    // line-height: 12px;
    paddingBottom: 10,
    marginTop: -40,
    transform: "translateY(30px)",
    opacity: 0.6
  },
  CardText2: {
    transform: "translateY(20px)"
  }
});

export default function MediaCard({ item }) {
  const classes = useStyles();
  const {
    createdAt,
    description,
    image_url,
    itemId,
    name,
    price,
    product_cat,
    product_new,
    product_quantity
  } = item;
  return (
    <Card className={classes.card}>
      <Link to={`/products/${itemId}`}>
        <CardMedia
          className={classes.media}
          image={image_url}
          title="Contemplative Reptile"
        />{" "}
      </Link>
      <CardContent fontWeight="fontWeightLight" className={classes.CardCont}>
        <div gutterBottom className={classes.CardText}>
          {name}
        </div>
        <Typography variant="p" component="h4" className={classes.CardText2}>
          NGN ₦{price}
        </Typography>
      </CardContent>
    </Card>
  );
}

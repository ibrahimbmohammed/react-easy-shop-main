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
    border: "2px solid black",
    marginBottom: 10,
    "@media (min-width:1024px)": {
      height: 150
    }
  },
  check: {
    marginTop: -30,
    transform: "translateX(30px)"
  },
  check2: {
    marginTop: -50,

    transform: "translateY(-10px)",
    transform: "translateX(30px)",
    "@media (min-width:1024px)": {
      transform: "translate(25px,-50px)"
    }
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    "@media (min-width:1024px)": {
      transform: "translate(-35px ,-21px)",
      maxWidth: 150,
      maxHeight: 150
    }
  },
  cartText: {
    "@media (min-width:1024px)": {
      fontSize: 18,
      fontWeight: "lighter",
      transform: "translateX(-40px)"
    }
  },
  cartText2: {
    "@media (min-width:1024px)": {
      transform: "translateX(-40px)"
    }
  }
}));

export default function PaperSheet({
  item,
  handleDelete,
  handleIncrease,
  handleDecrease,
  isLoading
}) {
  const { createdAt, image_url, itemId, price, quantity, total } = item;
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Grid container spacing={1} xs={12}>
          <Grid item xs={4} md={4}>
            <img className={classes.img} alt="complex" src={image_url} />
            {/* <CardMedia
              className={classes.media}
              src={pic}
              title="Contemplative Reptile"
            /> */}
          </Grid>
          <Grid item direction="column" xs={4} md={4}>
            {" "}
            <Typography
              className={classes.cartText}
              gutterBottom
              variant="p"
              component="h5"
            >
              This is a sheet of paper.
            </Typography>
            <Typography
              className={classes.cartText2}
              variant="p"
              component="h3"
            >
              NGN ₦{total}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            container
            className={classes.check}
            alignItems="flex-start"
            justify="flex-end"
          >
            <IconButton
              className={classes.button}
              onClick={() => handleDelete(itemId)}
              aria-label="delete"
            >
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
              <IconButton
                className={classes.button}
                onClick={() => handleIncrease(itemId)}
                disabled={isLoading}
                aria-label="increase"
              >
                <ExpandLess />
                <span
                  style={{
                    transform: "translateX(10px)"
                  }}
                >
                  <small>{quantity}</small>
                </span>
              </IconButton>
              <IconButton
                className={classes.button}
                onClick={() => handleDecrease(itemId)}
                disabled={isLoading}
                aria-label="delete"
              >
                <ExpandMore />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

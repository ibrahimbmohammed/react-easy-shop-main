import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./CartStyle";
import CartComp from "../../components/CartComponent/CartComponent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CartTotal from "../../components/CartComponent/CartTotal";
class Cart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container className={classes.defaultmagin}>
          <Grid container xs={12}>
            <Grid item xs={12} md={8} sm={8}>
              {" "}
              <CartComp />
            </Grid>
            <Grid item xs={12} md={8} sm={8}>
              {" "}
              <CartComp />
            </Grid>
            <Grid item xs={12} md={8} sm={8}>
              {" "}
              <CartComp />
            </Grid>
            <Grid item xs={12} md={8} sm={8}>
              {" "}
              <CartComp />
            </Grid>
            <Grid item xs={12} md={8} sm={8}>
              {" "}
              <CartComp />
            </Grid>
            <Grid className={classes.cartCard} item xs={12} md={4} sm={8}>
              {" "}
              <CartTotal />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(Cart);

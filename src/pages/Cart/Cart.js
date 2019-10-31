import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./CartStyle";
import CartComp from "../../components/CartComponent/CartComponent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
class Cart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container>
          <Grid container xs={12}>
            <Grid item xs={12}>
              {" "}
              <CartComp />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(Cart);

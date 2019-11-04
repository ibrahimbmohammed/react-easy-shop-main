import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./ProductStyles";
import ProductCard from "../../components/Cards/ProductCardI";
import { Container } from "@material-ui/core";

class ProductsPage extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);

    console.log(this.props.match.params.slug);
    return (
      <>
        <Container maxWidth="sm" className={classes.defaultmagin}>
          {" "}
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4} md={4}>
              <ProductCard></ProductCard>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <ProductCard></ProductCard>
            </Grid>{" "}
            <Grid item xs={6} sm={4} md={4}>
              <ProductCard></ProductCard>
            </Grid>{" "}
            <Grid item xs={6} sm={4} md={4}>
              <ProductCard></ProductCard>
            </Grid>{" "}
            <Grid item xs={6} sm={4} md={4}>
              <ProductCard></ProductCard>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
              <ProductCard></ProductCard>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(ProductsPage);

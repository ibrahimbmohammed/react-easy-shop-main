import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./ProductStyles";
import ProductCard from "../../components/Cards/ProductCard";
import { Container } from "@material-ui/core";

class ProductsPage extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);
    console.log(this.props.match.params.slug);
    return (
      <>
        <Container>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ProductCard></ProductCard>
            </Grid>
            <Grid item xs={6}>
              <ProductCard></ProductCard>
            </Grid>{" "}
            <Grid item xs={6}>
              <ProductCard></ProductCard>
            </Grid>{" "}
            <Grid item xs={6}>
              <ProductCard></ProductCard>
            </Grid>{" "}
            <Grid item xs={6}>
              <ProductCard></ProductCard>
            </Grid>
            <Grid item xs={6}>
              <ProductCard></ProductCard>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(ProductsPage);

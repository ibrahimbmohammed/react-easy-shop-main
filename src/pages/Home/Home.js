import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./HomeStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "../../components/AppBar/AppBarI";
import Container from "@material-ui/core/Container";
import ImageSlider from "../../components/ImageSliders/ImageSlider";
import CatergoryCard from "../../components/Cards/CategoryCard";
import ProductCard from "../../components/Cards/ProductCardI";
import Paper from "@material-ui/core/Paper";

import pic from "../../images/Rectangle 3.1.png";
import pic2 from "../../images/Rectangle 3.png";
import pic3 from "../../images/minified (1).jpg";
import pic4 from "../../images/minified (2).jpg";
import pic5 from "../../images/minified (3).jpg";
import pic6 from "../../images/minified (4).jpg";
import pic7 from "../../images/minified (5).jpg";
import pic8 from "../../images/minified (6).jpg";
class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar></AppBar>
        <Container className={classes.defaultmagin} maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.sliderConainer}>
                {" "}
                <ImageSlider />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={classes.HeadingText}
                // gutterBottom
                variant="h6"
                component="h5"
              >
                <b className={classes.underline}>Top catergories</b>
                {/* <hr></hr> */}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CatergoryCard image={pic} name={"Lace"}>
                {" "}
              </CatergoryCard>
            </Grid>
            <Grid item xs={6}>
              <CatergoryCard image={pic2} name={"Ankara"}></CatergoryCard>
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={classes.HeadingText}
                // gutterBottom
                variant="h6"
                component="h5"
              >
                <b className={classes.underline}>Latest</b>
                {/* <hr></hr> */}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <ProductCard image={pic3}></ProductCard>
            </Grid>
            <Grid item xs={6}>
              <ProductCard image={pic4}></ProductCard>
            </Grid>
            <Grid item xs={6}>
              <ProductCard image={pic5}></ProductCard>
            </Grid>
            <Grid item xs={6}>
              <ProductCard image={pic6}></ProductCard>
            </Grid>
            <Grid item xs={6}>
              <ProductCard image={pic7}></ProductCard>
            </Grid>
            <Grid item xs={6}>
              <ProductCard image={pic8}></ProductCard>
            </Grid>

            {/* Lazy load */}
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(Home);

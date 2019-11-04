import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./HomeStyles";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import ImageSlider from "../../components/ImageSliders/ImageSlider";
import CatergoryCard from "../../components/Cards/CategoryCard";
import CatergoryCardI from "../../components/Cards/CategoryCardI";
import ProductCard from "../../components/Cards/ProductCardI";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";

import pic from "../../images/Rectangle 3.1.png";
import pic2 from "../../images/Rectangle 3.png";
import pic3 from "../../images/minified (1).jpg";
import pic4 from "../../images/minified (2).jpg";
import pic5 from "../../images/minified (3).jpg";
import pic6 from "../../images/minified (4).jpg";
import pic7 from "../../images/minified (5).jpg";
import pic8 from "../../images/minified (6).jpg";
import pic9 from "../../images/Layer 21111.png";
import pic10 from "../../images/Layer 2.png";
class Home extends Component {
  state = {
    screenWidth: window.innerWidth
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateScreenWidth);
  }
  updateScreenWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  };
  render() {
    const { classes } = this.props;

    return (
      <>
        <Container className={classes.defaultmagin} maxWidth="md">
          <Grid container spacing={4}>
            {this.state.screenWidth >= 768 ? (
              <>
                <Grid item md={6} sm={6}>
                  <Paper className={classes.sliderConainer}>
                    {" "}
                    <ImageSlider />
                  </Paper>
                </Grid>
                {/* <Grid item xs={6} display="none">
                  <Typography
                    className={classes.HeadingText}
                    // gutterBottom
                    variant="h6"
                    component="h5"
                  >
                    <b className={classes.underline}>Top catergories</b>
                    {/* <hr></hr> */}
                {/* </Typography>{" "}
                </Grid> */}
                <Grid
                  item
                  container
                  spacing={0}
                  direction="row"
                  justify=""
                  alignItems="center"
                  alignContent="center"
                  sm={6}
                  md={6}
                >
                  {/* Top Category Section */}
                  <Grid
                    item
                    container
                    direction="row"
                    justify=""
                    alignItems=""
                    md={6}
                    sm={6}
                    spacing={0}
                  >
                    <Grid item spacing={0}>
                      <Card className={classes.card}></Card>
                    </Grid>
                    <Grid item>
                      {" "}
                      <CatergoryCardI image={pic10} name={"Lace"}>
                        {" "}
                      </CatergoryCardI>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justify=""
                    alignItems=""
                    md={6}
                    sm={6}
                  >
                    <Grid item>
                      {" "}
                      <CatergoryCard
                        image={pic9}
                        name={"Ankara"}
                      ></CatergoryCard>
                    </Grid>
                    <Grid item>
                      {" "}
                      <Card className={classes.card2}></Card>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                {" "}
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
                  </Typography>{" "}
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  alignContent="center"
                  spacing={0}
                >
                  {/* Top Category Section */}
                  <Grid item>
                    <CatergoryCard image={pic10} name={"Lace"}>
                      {" "}
                    </CatergoryCard>
                  </Grid>
                  <Grid item>
                    <CatergoryCard image={pic9} name={"Ankara"}></CatergoryCard>
                  </Grid>
                </Grid>
              </>
            )}

            {/*  Layout difference */}
            {/*ANOTHER SECTION*/}

            <Grid item xs={12}>
              <Container maxWidth="xl">
                <Typography
                  className={classes.HeadingText}
                  gutterBottom
                  variant="h6"
                  component="h5"
                >
                  <b className={classes.underline}>Top Brands</b>
                  {/* <hr></hr> */}
                </Typography>
                <Grid items container justify="space-around" xs={12}>
                  <Grid item>
                    {" "}
                    <CardMedia
                      className={classes.mediacircle}
                      image={pic9}
                      title="Contemplative Reptile"
                    />
                  </Grid>
                  <Grid item>
                    {" "}
                    <CardMedia
                      className={classes.mediacircle}
                      image={pic10}
                      title="Contemplative Reptile"
                    />
                  </Grid>
                  <Grid item>
                    {" "}
                    <CardMedia
                      className={classes.mediacircle}
                      image={pic3}
                      title="Contemplative Reptile"
                    />
                  </Grid>
                  <Grid item>
                    {" "}
                    <CardMedia
                      className={classes.mediacircle}
                      image={pic3}
                      title="Contemplative Reptile"
                    />
                  </Grid>
                </Grid>
              </Container>

              {/* END OF ANOTHER SECTION*/}
              <Grid item xs={12}>
                <Typography
                  className={classes.HeadingText}
                  gutterBottom
                  variant="h6"
                  component="h5"
                >
                  <b className={classes.underline}>Latest</b>
                  {/* <hr></hr> */}
                </Typography>
              </Grid>

              <Container maxWidth="sm">
                <Grid container spacing={3}>
                  <Grid item md={4} sm={4} xs={6}>
                    <ProductCard image={pic3}></ProductCard>
                  </Grid>
                  <Grid item md={4} sm={4} xs={6}>
                    <ProductCard image={pic4}></ProductCard>
                  </Grid>
                  <Grid item md={4} sm={4} xs={6}>
                    <ProductCard image={pic5}></ProductCard>
                  </Grid>
                  <Grid item md={4} sm={4} xs={6}>
                    <ProductCard image={pic6}></ProductCard>
                  </Grid>
                  <Grid item md={4} sm={4} xs={6}>
                    <ProductCard image={pic7}></ProductCard>
                  </Grid>
                  <Grid item md={4} sm={4} xs={6}>
                    <ProductCard image={pic8}></ProductCard>
                  </Grid>

                  {/* Lazy load */}
                </Grid>{" "}
              </Container>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(Home);

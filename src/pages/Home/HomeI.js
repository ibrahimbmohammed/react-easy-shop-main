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
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Axios from "axios";
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
import { Link } from "@material-ui/core";
import AppBar from "../../components/AppBar/AppBarI";
import { AppBarContext, AppBarConsumer } from "../../Context/AppBarContext";
import { AuthContext, AuthConsumer } from "../../Context/AuthContext";
import handleViewport from "../../utils/handleViewport";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false,
      screenWidth: window.innerWidth,
      lastItem: "",
      dataAvailable: false,
      error: false,
      count: true
    };
  }

  // static contextType = AppBarContext;
  static contextType = AuthContext;

  componentDidMount() {
    window.addEventListener("resize", this.updateScreenWidth);
    this.handleData();
  }
  updateScreenWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScroll);
    window.removeEventListener("scroll", this.handleMoreData);
  }
  handleData = () => {
    this.setState({
      isLoading: true
    });
    Axios.get(
      ` https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/productss
    `
    )
      .then(doc => {
        this.setState(
          {
            items: doc.data.data,
            isLoading: false,
            dataAvailable: true
          },
          () => {
            this.handleLast();
            // this.handleMoreData();
          }
        );
        console.log(this.state.items);
        console.log(this.state.lastItem);
      })
      .catch(err => {
        console.error(err);

        this.setState({
          error: true,
          isLoading: false
        });
      });
  };
  onEnterViewport = () => {
    console.log("hurry");
  };
  ///Handling more data
  handleMoreData = () => {
    this.setState({
      isLoading: true
    });
    const data = this.state.lastItem;
    const pgData = {
      createdAt: data
    };
    Axios.post(
      ` https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/products/homepagepost
    `,
      pgData
    )
      .then(doc => {
        this.setState(
          {
            isLoading: false,
            dataAvailable: true,
            count: false,
            items: [...this.state.items, ...doc.data.data]
          },
          () => {
            this.handleLast();
            this.setState({});
            console.log([...this.state.items]);
          }
        );

        console.log(doc.data.data);
        // console.log([this.state.items, ...doc.data.data]);
        console.log(this.state.items);
      })
      .catch(err => {
        console.error(err);

        this.setState({
          error: true,
          isLoading: false
        });
      });
  };
  handleLast() {
    this.setState(
      {
        lastItem: this.state.items[this.state.items.length - 1].createdAt
      },
      () => {
        console.log(this.state.lastItem);
      }
    );
  }
  /// LAZING LOADING

  handleClick = () => {
    console.log("hi");
  };

  handleScrolls = e => {
    let element = e.target;
    if (
      element.scrollHeight - element.scrollTop === element.clientHeight &&
      !this.state.isLoading &&
      this.state.dataAvailable
    ) {
      // do something at end of scroll
      console.log("mongo");

      this.handleMoreData();
    }
  };
  // COMING BACK TO YOU

  render() {
    const { classes } = this.props;
    // const { visible } = this.context;
    // const { authenticated } = this.context;
    // if (this.state.isLoading === false) {
    //   console.log(items);
    // }
    // const items = this.state.items.data;
    return (
      <>
        {/* {visible && <AppBar />} */}
        <AppBarConsumer>
          {value => (value.visible ? <AppBar /> : null)}
        </AppBarConsumer>
        <AuthConsumer>
          {value => (value.authenticated ? null : null)}
        </AuthConsumer>

        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            overflowY: "auto"
          }}
          onScroll={this.handleScroll}
          onScroll={this.handleScrolls}
          ref={scroller => {
            this.scroller = scroller;
          }}
        >
          <Container
            className={classes.defaultmagin}
            onScroll={this.handleScrolls}
            maxWidth="md"
          >
            <Grid
              container
              onScroll={this.handleScroll}
              ref={scroller => {
                this.scroller = scroller;
              }}
              spacing={4}
            >
              {this.state.screenWidth >= 768 ? (
                <>
                  {" "}
                  {/* <div className={classes.backgroundTop}> hi</div> */}
                  <Grid item md={6} sm={6}>
                    <Paper className={classes.sliderConainer}>
                      {" "}
                      <ImageSlider />
                    </Paper>
                  </Grid>
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
                        <Card className={classes.card}>
                          {" "}
                          <div
                            style={{
                              background: "transparent",
                              width: 120,
                              height: 120,
                              border: "3px solid #ffffff",
                              textAlign: "center",
                              margin: "auto",

                              marginTop: "10%",
                              color: "white",
                              paddingTop: "30%",
                              fontSize: 20,
                              "@media (min-width: 1024px)": {
                                marginTop: "80%"
                              }
                            }}
                          >
                            {" "}
                            Ankara{" "}
                          </div>{" "}
                        </Card>
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
                        <Card className={classes.card2}>
                          {" "}
                          <div
                            style={{
                              background: "transparent",
                              width: 120,
                              height: 120,
                              border: "3px solid #ffffff",
                              textAlign: "center",
                              margin: "auto",
                              marginTop: "10%",
                              marginTop: "10%",
                              color: "white",
                              paddingTop: "30%",
                              fontSize: 20
                            }}
                          >
                            {" "}
                            Lace{" "}
                          </div>{" "}
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>{" "}
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
                      <CatergoryCard
                        image={pic9}
                        name={"Ankara"}
                      ></CatergoryCard>
                    </Grid>
                  </Grid>
                </>
              )}

              {/*  Layout difference */}
              {/*ANOTHER SECTION*/}

              <Grid container item xs={0} md={12} justify="center">
                {/* END OF ANOTHER SECTION*/}
                <Grid item xs={12}>
                  <Typography
                    className={classes.HeadingText}
                    gutterBottom
                    variant="h6"
                    component="h5"
                  >
                    <b className={classes.underline}>Latest </b>
                    {/* <hr></hr> */}
                    {/* <hr></hr> */}
                  </Typography>
                </Grid>

                <Container className={classes.underline2} maxWidth="sm">
                  <Grid container spacing={1}>
                    {!this.state.dataAvailable
                      ? null
                      : this.state.items.map((item, i) => {
                          return (
                            <Grid item md={4} sm={4} xs={6}>
                              <ProductCard key={i} item={item} />{" "}
                            </Grid>
                          );
                        })}

                    {/* Lazy load */}
                  </Grid>{" "}
                  <Grid
                    item
                    container
                    alignItems="flex-end"
                    justify="center"
                    xs={12}
                  >
                    {" "}
                    <div className={"hello"}>
                      {this.state.error ? <h2>please refresh!</h2> : null}
                      {this.state.isLoading ? (
                        <CircularProgress className={classes.progress} />
                      ) : null}
                    </div>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Home);

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./ProductStyles";
import ProductCard from "../../components/Cards/ProductCardI";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AppBarContext } from "../../Context/AppBarContext";
import AppBar from "../../components/AppBar/AppBarII";
import Skeleton from "@material-ui/lab/Skeleton";

class ProductsPage extends Component {
  static contextType = AppBarContext;
  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: true,
      screenWidth: window.innerWidth,
      lastItem: "",
      dataAvailable: false,
      error: false,
      count: true
    };
  }

  static contextType = AppBarContext;

  componentDidMount() {
    window.addEventListener("resize", this.updateScreenWidth);
    this.handleData();
    // this.handleMoreData();
  }
  updateScreenWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScroll);
    window.removeEventListener("scroll", this.handleMoreData);
  }
  handleData = () => {
    Axios.get(
      ` https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/products/category/${this.props.match.params.slug}
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
        console.log(
          this.state.items.data[this.state.items.data.length - 1].createdAt
        );

        console.log(doc.data.data);
        // console.log([this.state.items, ...doc.data.data]);
        console.log(this.state.items);
      })
      .catch(err => console.error(err));
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

  handleScroll = () => {
    if (this.scroller) {
      console.log(this.scroller.scrollTop);
      if (
        this.scroller.scrollTop >= 590 &&
        !this.state.isLoading &&
        this.state.count == true
      ) {
        this.handleMoreData();
      }
    }
  };

  render() {
    const { classes } = this.props;
    const { visible } = this.context;
    // console.log(this.props);

    console.log(this.props.match.params.slug.trim());
    return (
      <>
        {visible && <AppBar />}
        <Container maxWidth="sm" className={classes.defaultmagin}>
          {" "}
          <Grid container spacing={3}>
            {!this.state.dataAvailable ? (
              <>
                <Grid item xs={6} sm={4} md={4}>
                  <Skeleton variant="rect" width={150} height={150} />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                  <Skeleton variant="rect" width={150} height={150} />
                </Grid>
                {this.state.error && <h1>something went wrong</h1>}
              </>
            ) : (
              this.state.items.map((item, i) => {
                return (
                  <Grid item xs={6} sm={4} md={4}>
                    <Link to={`/products/${"single"}`}>
                      <ProductCard key={i} item={item} />
                    </Link>
                  </Grid>
                );
              })
            )}
            {/* <Grid item xs={6} sm={4} md={4}>
              <Link to={`/products/${"single"}`}>
                <ProductCard />
              </Link>
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
            </Grid> */}
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(ProductsPage);

//

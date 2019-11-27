import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core";
import { styles } from "./SingleProStyle";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import pic from "../../images/minified (5).jpg";
import pic2 from "../../images/minified (1).jpg";
import pic3 from "../../images/minified (2).jpg";
import pic4 from "../../images/minified (3).jpg";
import pic5 from "../../images/minified (4).jpg";
import pic6 from "../../images/minified (5).jpg";
import SimilarProduct from "../../components/SimilarProductsCom/SimilarProductCom";
import Container from "@material-ui/core/Container";
import Modal from "../../components/Modal/ModalI";
import ModalI from "../../components/Modal/Modal";
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";
import { AppBarContext } from "../../Context/AppBarContext";
import AppBar from "../../components/AppBar/AppBarII";
import Axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Share from "@material-ui/icons/Share";

const tileData = [
  {
    img: pic2,
    title: "Image",
    author: "author"
  },
  {
    img: pic3,
    title: "Image",
    author: "author"
  },
  {
    img: pic4,
    title: "Image",
    author: "author"
  },
  {
    img: pic5,
    title: "Image",
    author: "author"
  },
  {
    img: pic6,
    title: "Image",
    author: "author"
  },
  {
    img: pic,
    title: "Image",
    author: "author"
  }
];

class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      item: "",
      isLoading: false,
      dataAvailable: false,
      success: "",
      cartError: false,
      error: false
    };
  }
  componentDidMount() {
    this.handleData();
  }
  handleData = () => {
    this.setState({
      isLoading: true
    });
    Axios.get(
      ` https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/products/${this.props.match.params.slug}
    `
    )
      .then(doc => {
        this.setState({
          item: doc.data,
          isLoading: false,
          dataAvailable: true
        });
        // console.log(this.state.item);
      })
      .catch(err => {
        console.error(err);

        this.setState({
          error: true,
          isLoading: false
        });
      });
  };
  handleAddToCart = () => {
    const token = localStorage.FBIdtoken;
    this.setState({
      isLoading: true
    });
    Axios.get(
      `  https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/products/addCart/${this.props.match.params.slug}
  `,
      { headers: { Authorization: `${token}` } }
    )
      .then(doc => {
        this.setState({
          success: doc.data,
          isLoading: false
        });
        // console.log(this.state.item);
        toast.notify("item Added Cart", {
          position: "top",
          color: "blue",
          duration: 1000
        });
      })
      .catch(err => {
        console.error(err);

        this.setState({
          cartError: true,
          isLoading: false
        });
        toast.notify("Please SignIn to Add Items to your cart", {
          position: "top",
          color: "blue",
          duration: 2000
        });
      });
  };
  handleWhatsApp = () => {
    console.log("hi");
  };
  static contextType = AppBarContext;
  render() {
    const { classes } = this.props;
    const { visible } = this.context;
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
    } = this.state.item;
    //<Skeleton variant="rect" width={150} height={150} />
    return (
      <>
        {visible && <AppBar />}
        <Grid container spacing={0} className={classes.defaultMargin} xs={12}>
          <Grid item xs={12} md={6}>
            {this.state.error && (
              <h2 style={{ textAlign: "center", marginTop: 50 }}>
                something went wrong
                <br />
                please try again!{" "}
              </h2>
            )}
            {this.state.isLoading ? (
              <Skeleton variant="rect" width={"100%"} height={360} />
            ) : (
              <CardMedia
                className={classes.mediaMain}
                image={image_url}
                title="Contemplative Reptile"
              />
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Paper className={classes.root}> */}{" "}
            <Container>
              <Grid container justify="space-between" item xs={12} md={6}>
                <Typography
                  className={classes.price}
                  variant="h6"
                  component="h6"
                >
                  NGN ₦{price}
                </Typography>
                <Typography
                  className={classes.price}
                  variant="h6"
                  component="h2"
                >
                  {/* <WhatsApp onClick={this.handleWhatsApp} />  */}
                  <ModalI />
                  <Share />
                </Typography>
              </Grid>
              <Typography
                className={classes.detailsText}
                gutterBottom
                variant="p"
                component="h5"
              >
                {description}
              </Typography>

              <Grid
                item
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                xs={12}
              >
                {" "}
                <Grid item>
                  {/* <Modal variant={"contained"} name={"buy now "} /> */}
                  <Modal error={this.state.error} item={this.state.item} />
                </Grid>
                <Grid item>
                  {" "}
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classes.margin2}
                    disabled={this.state.isLoading || this.state.success}
                    onClick={this.handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </Grid>
              </Grid>
            </Container>
            {/* </Paper> */}
          </Grid>

          {/* Similar Products */}
          <Grid item xs={12}>
            <Container>
              <Typography
                className={classes.price}
                gutterBottom
                variant="h6"
                component="h6"
              >
                Similar Products:
              </Typography>
            </Container>
            {/* <Paper className={classes.similarProd}> */}
            <Container>
              {" "}
              <SimilarProduct tileData={tileData} image={pic4} />
            </Container>

            {/* </Paper> */}
          </Grid>
          {/* Payment Details */}
          <Grid item xs={12}>
            <Paper>
              {" "}
              <Container>
                <Typography
                  className={classes.price}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  Payment Method:
                </Typography>

                <Typography
                  className={classes.detailsText}
                  // gutterBottom
                  variant="p"
                  component="h5"
                >
                  Currently easy shop utilisies its existing whatsapp platform
                  for processing payment and inquiries,by clicking the Buy
                  button the items you requested would be forwared to easyshops
                  whatsapp number where your request would immediatly responded
                  to, payment and shipment details would be commuinicated to
                  you,the method above is to help build trust between new
                  custormers and helps filter customers.
                </Typography>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(SingleProduct);

//modal

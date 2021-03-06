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
  render() {
    const { classes } = this.props;
    return (
      <>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <CardMedia
              className={classes.mediaMain}
              image={pic}
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.root}>
              {" "}
              <Typography
                className={classes.price}
                gutterBottom
                variant="h6"
                component="h6"
              >
                NGN ₦5000
              </Typography>
              <Typography
                className={classes.detailsText}
                // gutterBottom
                variant="p"
                component="h5"
              >
                High Quality African Real Veritable Wax 6 Yards Guaranteed Dutch
                Wax African Veritable Wax Veritable For Ankara Dresses 2019
              </Typography>
            </Paper>
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              {" "}
              <Grid item>
                {" "}
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  Small
                </Button>
              </Grid>
              <Grid item>
                {" "}
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.margin}
                >
                  Large
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Similar Products */}
          <Grid item xs={12}>
            <Typography
              className={classes.price}
              gutterBottom
              variant="h6"
              component="h6"
            >
              Similar Products:
            </Typography>
            <Paper className={classes.similarProd}>
              <SimilarProduct tileData={tileData}></SimilarProduct>
            </Paper>
          </Grid>
          {/* Payment Details */}
          <Grid item xs={12}>
            <Paper>
              {" "}
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
                Currently easy shop utilisies its existing whatsapp platform for
                processing payment and inquiries,by clicking the Buy button the
                items you requested would be forwared to easyshops whatsapp
                number where your request would immediatly responded to, payment
                and shipment details would be commuinicated to you,the method
                above is to help build trust between new custormers and helps
                filter customers.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(SingleProduct);

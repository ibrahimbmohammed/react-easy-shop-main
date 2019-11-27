import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../../images/Layer 7.jpg";
import pic2 from "../../images/Layer 8@1,5x.jpg";

import { withStyles } from "@material-ui/styles";
import { styles } from "../../pages/Home/HomeStyles";
class DemoCarousel extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={3000}
        infiniteLoop
      >
        {/* <div className={classes.sliderContainer}>
          <img className={classes.sliderContainer} src={pic3} />
        </div> */}
        <div className={classes.sliderContainer}>
          <img className={classes.sliderContainer} src={pic2} />
        </div>
        <div className={classes.sliderContainer}>
          <img className={classes.sliderContainer} src={pic1} />
        </div>
      </Carousel>
    );
  }
}
export default withStyles(styles)(DemoCarousel);

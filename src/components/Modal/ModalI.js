import React from "react";
import SkyLight from "react-skylight";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import styles from "../../Theme/MuiTheme";
import Payment from "../../components/Payment/Payment";
class ExampleCustom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    var myBigGreenDialog = {
      backgroundColor: "#ffffff",
      color: "#000",
      width: "70%",
      height: "50%",
      marginTop: "-200px",
      marginLeft: "-35%",
      borderRadius: 10
    };

    return (
      <>
        <section>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.margin2}
            onClick={() => this.customDialog.show()}
            disabled={this.props.error}
          >
            Buy Now
          </Button>
        </section>
        <SkyLight
          dialogStyles={myBigGreenDialog}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title="Your Payment Options"
        >
          <Payment item={this.props.item} />
        </SkyLight>
      </>
    );
  }
}

ExampleCustom.displayName = "ExampleCustom";

export default withStyles(styles)(ExampleCustom);

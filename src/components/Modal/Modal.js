import React from "react";
import SkyLight from "react-skylight";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import styles from "../../Theme/MuiTheme";
import WhatsApp from "@material-ui/icons/WhatsApp";
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
      borderRadius: 10,
      alignItem: "center",
      textAlign: "center",
      fontSize:12
    };

    return (
      <>
        <section>
         
          <WhatsApp onClick={() => this.customDialog.show()} />
        </section>
        <SkyLight
          dialogStyles={myBigGreenDialog}
          hideOnOverlayClicked
          ref={ref => (this.customDialog = ref)}
          title="please enter your whatsapp number"
        ></SkyLight>
      </>
    );
  }
}

ExampleCustom.displayName = "ExampleCustom";

export default withStyles(styles)(ExampleCustom);

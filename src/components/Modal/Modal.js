import React from "react";
import SkyLight from "react-skylight";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import styles from "../../Theme/MuiTheme";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Icon from "@material-ui/core/Icon";
class ExampleCustom extends React.Component {
  constructor(props) {
    super(props);
  }
  handleWhatsapp = () => {
    let url = `https://api.whatsapp.com/send?phone=2347033039955&text=${this.props.image_url}`;
    const win = window.open(url, "_blank");
    win.focus();
  };

  render() {
    const { classes } = this.props;
    var myBigGreenDialog = {
      backgroundColor: "#ffffff",
      color: "#000",
      width: "70%",
      height: "30%",
      marginTop: "-200px",
      marginLeft: "-35%",
      borderRadius: 10,
      alignItem: "center",
      textAlign: "center",
      fontSize: 12
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
          title="contact seller through whatsapp"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            // endIcon={<Icon>send</Icon>}
            onClick={this.handleWhatsapp}
          >
            Send
          </Button>
        </SkyLight>
      </>
    );
  }
}

ExampleCustom.displayName = "ExampleCustom";

export default withStyles(styles)(ExampleCustom);

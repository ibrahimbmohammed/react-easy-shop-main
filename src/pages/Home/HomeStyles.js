import theme from "../../Theme/MuiTheme";
import { Hidden } from "@material-ui/core";

const styles = {
  ...theme,
  HeadingText: {
    textAlign: "center",
    "@media (min-width: 1024px)": {
      fontSize: 30,
      paddingBottom: 20
    }
  },
  sliderContainer: {
    borderRadius: "10px 10px 10px 10px",
    background: "none",
    "@media (min-width: 1024px)": {
      // transform: "translateY(20%)",
      height: 300
    }
  },
  sliderContainer2: {
    borderRadius: "15px 15px 15px 15px",
    width: "100px !important"
  },
  sliderdiv: {
    width: "250px",
    backgroundColor: " !important"
  },
  underline: {
    borderBottom: "2px solid",
    paddingBottom: 5
  },
  defaultmagin: {
    marginTop: 70,
    marginBottom: 50
  },
  card: {
    width: 140,
    height: 140,
    position: "relative",
    transform: "translateX(24%)",

    "@media (min-width: 1024px)": {
      width: 150,
      height: 150,
      transform: "translateX(55%)"
    }
  },
  card2: {
    width: 140,
    height: 140,
    position: "relative",
    transform: "translateX(0%)",

    "@media (min-width: 1024px)": {
      width: 150,
      height: 150,
      transform: "translateX(-3%)",
      marginLeft: 20
    }
  },
  mediacircle: {
    height: 140,
    width: 140,
    borderRadius: "50%"
  }
};

export { styles };

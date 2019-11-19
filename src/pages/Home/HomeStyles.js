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
    objectFit: "cover",
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
  underline2: {
    marginTop: 20
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
    backgroundColor: "#78EAD6",
    "@media (min-width: 1024px)": {
      width: 150,
      height: 150,
      transform: "translateX(55%)",
      textAlign: "center",

      div: {
        width: 100,
        height: 100,
        // backgroundColor: "transparent",
        border: "1px solid red",
        outlineOffset: 10,
        zIndex: 5
      }
    }
  },
  card2: {
    width: 140,
    height: 140,
    position: "relative",
    transform: "translateX(0%)",
    backgroundColor: "#F59DAF",

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
  },
  circleSection: {
    display: "none"
  },
  backgroundTop: {
    width: 950,
    position: "relative",

    zIndex: 5,
    backgroundColor:
      "radial-gradient(7.77% 33.56% at 57.77% 113.35%, rgba(75, 8, 109, 0.7) 100.63%, rgba(172, 192, 254, 0.525) 108.59%)",
    "&::before": {
      content: "",
      display: "block",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 240,
      zIndex: 5,
      backgroundColor: "rgba(115, 255, 115, .8)"
    }
  },
  progress: {
    marginTop: 20
  }
  // defaultmagin: {
  //   width: "100vw",
  //   height: "100vh",
  //   position: "absolute",
  //   overflowY: "auto"
  // }
};

export { styles };

import theme from "../../Theme/MuiTheme";

const styles = {
  ...theme,
  HeadingText: {
    textAlign: "center"
  },
  card: {
    maxWidth: 345,
    position: "relative"
  },
  media: {
    height: 140
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white"
  },
  overlay2: {
    position: "absolute",
    // display: "block",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: " rgba(0,0,0,0.5)",
    zIndex: 2,
    cursor: "pointer"
  },
  defaultmagin: {
    marginTop: 60,
    marginBottom: 70
  }
};

export { styles };

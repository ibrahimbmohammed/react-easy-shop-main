import theme from "../../Theme/MuiTheme";

const styles = {
  ...theme,
  HeadingText: {
    textAlign: "center"
  },
  cartCard: {
    "@media (min-width: 1024px)": {
      position: "fixed",
      right: "5%"
    }
  },
  HeadingTexts: {
    textAlign: " center",
    marginTop: 120
  },
  HeadingTextss: {
    textDecoration: "none",
    fontWeight: 900,
    fontStyle: "bold"
  },
  progress: {
    marginTop: 100,
    marginBottom: 50
  }
};

export { styles };

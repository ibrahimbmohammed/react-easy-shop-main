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
  }
};

export { styles };

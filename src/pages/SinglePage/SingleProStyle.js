import theme from "../../Theme/MuiTheme";

const styles = {
  ...theme,
  HeadingText: {
    textAlign: "center"
  },
  card: {
    maxWidth: 345
  },
  mediaMain: {
    height: 330
  },
  price: {
    paddingTop: 10,
    fontWeight: "Bold"
  },
  detailsText: {
    fontSize: 14,
    paddingBottom: 10,
    "@media (min-width: 1024px)": {
      fontSize: 20,
      fontWeight: 100,
      paddingTop: 30
    }
  },
  root: {
    height: 180,
    width: "100%",
    "@media (min-width: 1024px)": {
      height: 332
    }
  },
  similarProd: {
    height: "auto",
    "@media (min-width: 1024px)": {
      height: 332
    }
  },
  defaultMargin: {
    marginTop: 50,
    marginBottom: 70
  },
  margin2: {
    paddingLeft: 10,
    paddingRight: 10,
    "@media (min-width: 1024px)": {
      marginTop: 30,
      padding: 15
    }
  },
  margin: {
    "@media (min-width: 1024px)": {
      marginTop: 30,
      padding: 15
    }
  }
};

export { styles };

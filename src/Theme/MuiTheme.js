const theme = {
  typography: {
    fontFamily: "Tangerine, cursive",
    fontFamily: "montserrat",
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#4f4f4f",
      main: "#242424",
      dark: "#191919",
      contrastText: "#fff"
    },
    secondary: {
      light: " #ab003c",
      main: "rgba(255, 255, 255, 0.2)",
      dark: "#f73378",
      contrastText: "#fff"
    }
  },
  CardCont: {
    backgroundColor: "#242424",
    textAlign: "center",
    color: "white"
  },
  shape: {
    borderRadius: 8
  },
  headingText: {
    textAlign: "center"
  },
  AccountText: {
    textAlign: "center",
    fontWeight: "light",
    fontSize: 14,
    opacity: 0.7,
    marginTop: 10,
    marginBottom: 20
  },
  inputMargin: {
    paddingTop: 10,
    paddingBottom: 5
  },
  defaultmagin: {
    marginTop: 70,
    marginBottom: 70
  },
  margin2: {
    paddingLeft: 22,
    paddingRight: 22,
    "@media (min-width: 1024px)": {
      marginTop: 30,
      padding: "15px 30px 15px 30px"
    }
  },
  margin: {
    "@media (min-width: 1024px)": {
      marginTop: 30,
      padding: 15
    }
  },
  link: {
    textDecoration: "none"
  }
};

export default theme;

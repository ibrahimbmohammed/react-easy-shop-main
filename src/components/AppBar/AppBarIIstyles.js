import theme from "../../Theme/MuiTheme";
import { fade, makeStyles } from "@material-ui/core/styles";
const styles = {
  ...theme,
  root: {
    flexGrow: 1,
    backgroundColor: "transparent"
  },
  Navhead: {
    borderRadius: "0px 0px 15px 15px"
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    transform: "translateX(-15px)"
  },
  title: {
    flexGrow: 1,
    display: "none"
    // [theme.breakpoints.up("sm")]: {
    //   display: "block"
    // }
  },
  search: {
    position: "relative",
    borderRadius: "30px 30px 30px 30px",

    "@media (max-width: 763px)": {
      transform: "translateX(-35px)"
    },
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%"
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: theme.spacing(1),
    //   width: "auto"
    // }
  },
  searchIcon: {
    // width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.3)"
  },
  inputRoot: {
    color: "black"
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%"

    // [theme.breakpoints.up("sm")]: {
    //   width: 120,
    //   "&:focus": {
    //     width: 200
    //   }
    // }
  }
};

export { styles };

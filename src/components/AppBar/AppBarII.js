import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBack from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import theme1 from "../../Theme/MuiTheme";
import { AppBarContext } from "../../Context/AppBarContext";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  ...theme1,
  root: {
    flexGrow: 1,
    backgroundColor: "transparent"
  },
  Navhead: {
    borderRadius: "0px 0px 15px 15px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    transform: "translateX(-15px)"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
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
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
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
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

function SearchAppBar({ history }) {
  const classes = useStyles();

  function handleBack() {
    history.goBack();
  }
  return (
    <div className={classes.root}>
      <AppBar
        className={classes.Navhead}
        style={{ background: "transparent", boxShadow: "none" }}
      >
        {" "}
        <Toolbar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="rgba(0, 0, 0, 1)"
              aria-label="open drawer"
            >
              <ArrowBack onClick={handleBack} />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Easy Shop
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(SearchAppBar);

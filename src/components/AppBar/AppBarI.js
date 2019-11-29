import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import theme1 from "../../Theme/MuiTheme";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  ...theme1,
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between"
  },
  root2: {
    transform: "translateX(150px)",
    "@media (min-width: 768px)": {
      transform: "translateX(650px)"
    }
  },
  Navhead: {
    borderRadius: "0px 0px 15px 15px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
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

    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
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
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),

    width: 60,

    "&:hover": {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.Navhead}>
        {" "}
        <Toolbar position="fixed">
          <Toolbar>
            <Typography
              style={{
                fontFamily: "Tangerine, cursive",
                fontSize: 30,
                transform: "translateX(-15px)"
              }}
              noWrap
            >
              Easy Shop
            </Typography>
            {/* <IconButton
              edge="start"
              className={classes.menuBtton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton> */}
            {/* <Typography className={classes.title} variant="h6" noWrap>
              Easy Shop
            </Typography> */}
            {/* <div className={classes.search}>
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
            </div>{" "} */}
          </Toolbar>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
          >
            {" "}
            <AccountCircle className={classes.root2}></AccountCircle>
          </IconButton>{" "}
        </Toolbar>
      </AppBar>
    </div>
  );
}

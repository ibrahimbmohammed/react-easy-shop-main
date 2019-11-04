import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRounded from "@material-ui/icons/HomeRounded";
import MenuRounded from "@material-ui/icons/MenuRounded";
import ShoppingIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: "0",
    marginBottom: -1,
    boxShadow: " 1px -1px 3px rgba(0, 0, 0, 0.25)",
    borderRadius: " 10px 10px 0px 0px",
    zIndex: 10
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value="recents"
        icon={<HomeRounded />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Categories"
        value="favorites"
        icon={<MenuRounded />}
        component={Link}
        to="/Categories"
      />
      <BottomNavigationAction
        label="Cart"
        value="nearby"
        icon={<ShoppingIcon />}
        component={Link}
        to="/Cart"
      />
      <BottomNavigationAction
        label="Account"
        value="folder"
        icon={<PersonRoundedIcon />}
        component={Link}
        to="/SignIn"
      />
    </BottomNavigation>
  );
}
//   <Link to={`/product/${name}`} name={name}>

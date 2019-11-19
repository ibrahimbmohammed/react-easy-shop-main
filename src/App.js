import React, { Component } from "react";
import Home from "./pages/Home/HomeI";
import Category from "./pages/Category/Category";
import ProductsPage from "./pages/Products/ProductsPage";
import SingleProduct from "./pages/SinglePage/SingleProduct";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import AppBar from "./components/AppBar/AppBarI";
import AppBarI from "./components/AppBar/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Categories from "./pages/Categories/Categories";
import BottomNav from "./components/Navbar/BottomNav";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import themeFile from "./Theme/MuiTheme";
import AuthRoute from "./utils/AuthRoute";
import { Switch, Route } from "react-router-dom";

const theme = createMuiTheme(themeFile);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWidth: ""
    };
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ currentWidth: window.innerWidth });
  };

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* if you wrapped it in a component it will work-- the trasitionn that is */}

          <Switch>
            {" "}
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:slug" component={Category} />
            <Route
              exact
              path="/products/category/:slug"
              component={ProductsPage}
            />
            <Route exact path="/products/:slug" component={SingleProduct} />
            <Route exact path="/Categories" component={Categories} />
            <AuthRoute
              exact
              path="/SignIn"
              component={SignIn}
              //authenticated={authenticated}
            />
            <AuthRoute
              exact
              path="/SignUp"
              component={SignUp}
              //authenticated={authenticated}
            />
            <Route exact path="/cart" component={Cart} />
            {/* <Route component={ErrorPage} /> */}{" "}
          </Switch>
          <BottomNav />
        </ThemeProvider>
      </>
    );
  }
}

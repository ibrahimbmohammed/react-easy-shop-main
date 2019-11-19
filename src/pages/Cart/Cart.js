import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./CartStyle";
import CartComp from "../../components/CartComponent/CartComponent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CartTotal from "../../components/CartComponent/CartTotal";
import { AppBarContext } from "../../Context/AppBarContext";
import AppBar from "../../components/AppBar/AppBarII";
import Axios from "axios";
class Cart extends Component {
  state = {
    item: "",
    isLoading: true,
    dataAvailable: false,
    error: false,
    total: ""
  };

  componentDidMount() {
    this.handleData();
  }
  handleData = () => {
    const token = localStorage.FBIdtoken;
    Axios.get(
      ` https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/user/cart
  `,
      { headers: { Authorization: `${token}` } }
    )
      .then(doc => {
        this.setState(
          {
            item: doc.data,
            isLoading: false,
            dataAvailable: true
          },
          () => {
            //console.log("call the function here");
            this.calculateTotal();
          }
        );
        console.log(this.state.item);
      })
      .catch(err => {
        console.error(err);

        this.setState({
          error: true,
          isLoading: false
        });
      });
  };
  calculateTotal = () => {
    console.log("hello");
    let subTotal = 0;
    this.state.item.cart.map(item => (subTotal += item.total));
    const currentTotal = subTotal;
    this.setState(
      () => {
        return {
          total: currentTotal
        };
      },
      () => console.log(this.state.total)
    );
  };

  static contextType = AppBarContext;
  render() {
    const { classes } = this.props;
    const { visible } = this.context;
    const { user, cart } = this.state.item;
    const cartTotal = this.state.total;

    return (
      <>
        {visible && <AppBar />}
        <Container className={classes.defaultmagin}>
          <Grid container xs={12}>
            {this.state.dataAvailable
              ? cart.map((item, i) => (
                  <Grid item xs={12} md={8} sm={5}>
                    {" "}
                    <CartComp key={i} item={item} />
                  </Grid>
                ))
              : null}

            <Grid className={classes.cartCard} item xs={12} md={4} sm={5}>
              {" "}
              <CartTotal cartTotal={cartTotal} />
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withStyles(styles)(Cart);

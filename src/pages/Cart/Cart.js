import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./CartStyle";
import CartComp from "../../components/CartComponent/CartComponent";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CartTotal from "../../components/CartComponent/CartTotal";
import { AppBarContext, AppBarConsumer } from "../../Context/AppBarContext";
import { AuthContext, AuthConsumer } from "../../Context/AuthContext";
import AppBar from "../../components/AppBar/AppBarII";
import Axios from "axios";
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

// const CustomNotification = ({ title }) => {
//   const theme = useTheme();
//   return <div style={{ color: theme.primary }}>{title}</div>;
// };

//const CustomNotificationWithTheme = withTheme(CustomNotification);

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
    const { handleAuth } = this.context;
    handleAuth();
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
            toast.notify("Hello world!", {
              position: "bottom",
              color: "blue",
              duration: 1000
            });
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
  handleIncrease = itemId => {
    this.setState({
      isLoading: true
    });
    const token = localStorage.FBIdtoken;
    Axios.get(
      `  https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/user/cartIncreament/${itemId}
    `,
      { headers: { Authorization: `${token}` } }
    )
      .then(doc => {
        this.setState(
          {
            isLoading: false
          },
          () => {
            this.handleData();
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
    console.log("increase");
  };
  handleDecrease = itemId => {
    this.setState({
      isLoading: true
    });
    const token = localStorage.FBIdtoken;
    Axios.get(
      `  https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/user/cartDecreament/${itemId}
    `,
      { headers: { Authorization: `${token}` } }
    )
      .then(doc => {
        this.setState(
          {
            isLoading: false
          },
          () => {
            this.handleData();
          }
        );
      })
      .catch(err => {
        console.error(err);

        this.setState({
          error: true,
          isLoading: false
        });
      });

    console.log("Decrease");
  };
  handleDelete = itemId => {
    const token = localStorage.FBIdtoken;
    if (token) {
      Axios.get(
        `https://europe-west1-easy-shop-53cc2.cloudfunctions.net/api/removeCart/${itemId}
    `,
        { headers: { Authorization: `${token}` } }
      )
        .then(doc => {
          this.setState(
            {
              isLoading: false
            },
            () => {
              this.handleData();
            }
          );
        })
        .catch(err => {
          console.error(err);

          this.setState({
            error: true,
            isLoading: false
          });
        });
      console.log("Delete");
    }
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
  static contextType = AuthContext;
  render() {
    const { classes } = this.props;
    const { authenticated } = this.context;
    const { user, cart } = this.state.item;
    const cartTotal = this.state.total;

    console.log(authenticated);

    return (
      <>
        <AppBarConsumer>
          {value => (value.visible ? <AppBar /> : null)}
        </AppBarConsumer>
        {authenticated ? (
          <Container className={classes.defaultmagin}>
            <Grid container xs={12}>
              {this.state.dataAvailable
                ? cart.map((item, i) => (
                    <Grid item xs={12} md={8} sm={5}>
                      {" "}
                      <CartComp
                        key={i}
                        item={item}
                        handleIncrease={this.handleIncrease}
                        handleDelete={this.handleDelete}
                        handleDecrease={this.handleDecrease}
                        isLoading={this.state.isLoading}
                      />
                    </Grid>
                  ))
                : null}

              <Grid className={classes.cartCard} item xs={12} md={3} sm={5}>
                {" "}
                <CartTotal cartTotal={cartTotal} />
              </Grid>
            </Grid>
          </Container>
        ) : null}
      </>
    );
  }
}
export default withStyles(styles)(Cart);

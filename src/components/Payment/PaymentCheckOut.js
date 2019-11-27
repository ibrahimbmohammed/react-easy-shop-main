import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { makeStyles } from "@material-ui/core/styles";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const useStyles = makeStyles(theme => ({
  buttonp: {
    transform: "translate(5%)"
  }
}));
export default function App({ item, cartTotal }) {
  const classes = useStyles();
  console.log(item);
  App.defaultProps = {
    item: {
      name: "product",
      price: 100
    }
  };
  const { name, price, image_url } = item;
  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://stripep-payment.herokuapp.com/checkout",
      { token, item }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className={classes.buttonp}>
      <StripeCheckout
        stripeKey="pk_test_28A4F4GgExRwabZZeprlxedK00PVaaSDy0"
        token={handleToken}
        currency="ngn"
        image={image_url}
        amount={cartTotal * 100}
        name={name}
        billingAddress
        shippingAddress
      />
    </div>
  );
}

/*
DEPENDENCIES
 "stripe": "6.12.1",
    "uuid": "3.3.2"



const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("STRIPE_SECRET_KEY");
const uuid = require("uuid/v4");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(8080);


*/

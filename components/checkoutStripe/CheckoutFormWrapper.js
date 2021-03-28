import React from "react";
import CheckoutForm from "./CheckoutForm";
import api from "./api";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = api.getPublicStripeKey().then((key) => loadStripe(key));

export default function CheckoutFormWrapper() {
  return (
    <div className="App">
      <div className="sr-root">
        <div className="sr-main">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
    </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import api from "./api";
import { connect } from 'react-redux';
import {completeStripeTransaction} from '../../store/actions/accountsActions'
import Router from 'next/router'

function CheckoutForm({total,products,completeStripeTransaction}) {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Step 1: Fetch product details such as amount and currency from
    // API to make sure it can't be tampered with in the client.
      setAmount(total);
      setCurrency('USD');


    // Step 2: Create PaymentIntent over Stripe API
    api
      .createPaymentIntent(total)
      .then((clientSecret) => {
        setClientSecret(clientSecret);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const email = ev.target.email.value
    // Step 3: Use clientSecret from PaymentIntent and the CardElement
    // to confirm payment with stripe.confirmCardPayment()
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: ev.target.name.value,
          email: ev.target.email.value,
        },
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
      console.log("[error]", payload.error);
    } else {
      completeStripeTransaction(email,total,products)
      setError(null);
      setSucceeded(true);
      setProcessing(false);
      Router.push({
        pathname: '/thankyou'
    })
    }
  };

  const renderSuccess = () => {
    return (
      <div className="sr-field-success message">
        <h1>Your test payment succeeded</h1>
        <p>View PaymentIntent response:</p>
        <pre className="sr-callout">
          <code>{JSON.stringify(metadata, null, 2)}</code>
        </pre>
      </div>
    );
  };

  const renderForm = () => {
    const options = {
      style: {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        }
      },
      hidePostalCode: true
    };

    return (
      <form onSubmit={handleSubmit}>
        <h1>
          {currency.toLocaleUpperCase()}{" "}
          {amount}{" "}
        </h1>
        <h4>Checkout</h4>

        <div className="sr-combo-inputs">
          <div className="sr-combo-inputs-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              autoComplete="cardholder"
              className="sr-input"
            />
          </div>
          <div className="sr-combo-inputs-row">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="cardholder"
              className="sr-input"
            />
          </div>

          <div className="sr-combo-inputs-row">
            <CardElement
              className="sr-input sr-card-element"
              options={options}
            />
          </div>
        </div>

        {error && <div className="message sr-field-error">{error}</div>}

        <button
          className="stripe-btn"
          disabled={processing || !clientSecret || !stripe}
        >
          {processing ? "Processing…" : "Pay"}
        </button>
      </form>
    );
  };

  return (

    <div className="checkout-form">
      <div className="sr-payment-form">
        <div className="sr-form-row" />
         {renderForm()}
      </div>
    </div>

  );
}
const mapStateToProps = (state) => {
  return {
      total: state.total,
      products: state.addedItems
  }
}
export default connect(mapStateToProps,{
  completeStripeTransaction
})(CheckoutForm)
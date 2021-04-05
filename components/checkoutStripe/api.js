import axios from "axios";

const createPaymentIntent = (total) => 
  axios
    .post("/api/stripe/create-payment-intent", {amount:total})
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        return res.data;
      } else {
        return null;
      }
    })
    .then((data) => {
      if (!data || data.error) {
        console.log("API error:", { data });
        throw new Error("PaymentIntent API Error");
      } else {
        return data.client_secret;
      }
    });

const getPublicStripeKey = () =>
  axios
    .get("/api/stripe/public-key")
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return null;
      }
    })
    .then((data) => {
      if (!data || data.error) {
        console.log("API error:", { data });
        throw Error("API Error");
      } else {
        return data.publicKey;
      }
    });

const api = {
  createPaymentIntent,
  getPublicStripeKey: getPublicStripeKey,
};

export default api;

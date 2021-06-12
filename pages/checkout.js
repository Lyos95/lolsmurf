import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";
import CheckoutFormWrapper from "../components/checkoutStripe/CheckoutFormWrapper";
import { NextSeo } from "next-seo";
import OrderSummary from "../components/checkout/OrderSummary";
import '../assets/styles/font.min.css'
class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <NextSeo
          noindex={true}
          title="LolSmurf - Best League of Legends smurfs"
          description="Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅"
          canonical="https://www.lolsmurf.net/checkout"
        />
        <Navbar />
        <Breadcrumb title="Checkout" />
        <div className='checkout-container-grid'>
          <CheckoutFormWrapper />
          <div></div>
          <div className='price-table-container'>
          <OrderSummary />
          </div>
        </div>
        <Facility />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;

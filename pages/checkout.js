import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import CheckoutForm from '../components/checkout/CheckoutForm';
import {NextSeo} from 'next-seo'
//import Pixel from '../components/Pixel'
class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <NextSeo    noindex={true}
                title='LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="https://www.lolsmurf.net/checkout"
                />
                <Navbar />
                <Breadcrumb title="Checkout" />
       

                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;

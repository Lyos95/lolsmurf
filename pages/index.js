import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Banner from '../components/shop-style-four/Banner';
import Facility from '../components/shop-style-four/Facility';
import OfferArea from '../components/shop-style-four/OfferArea';
import Products from '../components/shop-style-one/Products';
import ArticleContent from '../components/Common/ArticleContent';
import {NextSeo} from 'next-seo'
import Pixel from '../components/Pixel'
class Index extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Pixel name='FACEBOOK_PIXEL_1' />
                <NextSeo
                title='LolSmurf | Buy LoL Smurf | Unranked & Instant Access'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="https://www.lolsmurf.net/"
                />
                <Navbar />
                <Banner />
                <Facility />                
                <Products />
                <OfferArea />
                <ArticleContent/>
                <Footer />
            </React.Fragment>
        );
    }
}



export default (Index)

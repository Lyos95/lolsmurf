import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Banner from '../components/shop-style-four/Banner';
import Facility from '../components/shop-style-four/Facility';
import OfferArea from '../components/shop-style-four/OfferArea';
import Products from '../components/shop-style-one/Products';
import ArticleContent from '../components/Common/ArticleContent';
import {NextSeo} from 'next-seo'
import LazyLoad from 'react-lazyload';
class Index extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <NextSeo
                title='LolSmurf | Buy LoL Smurf | Unranked & Instant Access'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="https://www.lolsmurf.net/"
                />
                <Navbar />
                <LazyLoad once>   
                <Banner />
                </LazyLoad>
                <LazyLoad once>   
                     <Facility />  
                </LazyLoad>
                <LazyLoad once>       
                    <Products />
                </LazyLoad>
                <LazyLoad once>  
                    <OfferArea />
                </LazyLoad>
                <LazyLoad once>  
                     <ArticleContent/>
                </LazyLoad>
                <LazyLoad once>  
                     <Footer />
                </LazyLoad>
            </React.Fragment>
        );
    }
}



export default (Index)

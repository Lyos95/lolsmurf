import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../components/Layout/Footer'))

const Banner = dynamic(() => import('../components/shop-style-four/Banner'))
const Facility = dynamic(() => import('../components/shop-style-four/Facility'))
const OfferArea = dynamic(() => import('../components/shop-style-four/OfferArea'))
const Products = dynamic(() => import('../components/shop-style-one/Products'))
const ArticleContent = dynamic(() => import('../components/Common/ArticleContent'))


import { connect } from 'react-redux';
import {checkIfWeHaveThatAmountOfAccs} from '../store/actions/accountsActions'
import { ToastContainer, toast, Slide } from 'react-toastify';

import {NextSeo} from 'next-seo'
class Index extends Component {
    constructor(props){
        super(props)
    }
    async componentDidMount() {
        let approval =  await this.props.checkIfWeHaveThatAmountOfAccs()

        
        if(!approval){
          toast.info('We have updated your cart, we no longer have that amount of accounts', {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
          });
      }
        
        
    }
    render() {
        return (
            <React.Fragment>
                <NextSeo
                title='▷LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="'https://www.lolsmurf.net/"
                />
                <Navbar />
                <Banner />
                <Facility />                
                <Products />
                <OfferArea />
                <ArticleContent/>
                <Footer />
                <ToastContainer transition={Slide} />
            </React.Fragment>
        );
    }
}



export default connect(
    null,
    {checkIfWeHaveThatAmountOfAccs}
)(Index)

import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Banner from '../components/shop-style-four/Banner';
import Facility from '../components/shop-style-four/Facility';
import OfferArea from '../components/shop-style-four/OfferArea';
import Products from '../components/shop-style-one/Products';
import AddsModal from '../components/Modal/AddsModal'
import { connect } from 'react-redux';
import {checkIfWeHaveThatAmountOfAccs} from '../store/actions/accountsActions'
import { ToastContainer, toast, Slide } from 'react-toastify';
import ArticleContent from '../components/Common/ArticleContent';
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

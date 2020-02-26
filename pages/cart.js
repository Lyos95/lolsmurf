import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import CartContent from '../components/cart/CartContent';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { connect } from 'react-redux';
import {verifyTransaction ,checkIfWeHaveThatAmountOfAccs} from '../store/actions/accountsActions'

class Index extends Component {
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
                <Breadcrumb title="Cart" />
                <CartContent />
                <Facility />
                <Footer />
                <ToastContainer transition={Slide} />
            </React.Fragment>
        );
    }
}

export default connect(
    null,{checkIfWeHaveThatAmountOfAccs}
)(Index)
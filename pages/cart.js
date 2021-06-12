import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import CartContent from '../components/cart/CartContent';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { connect } from 'react-redux';
import { checkIfWeHaveThatAmountOfAccs} from '../store/actions/accountsActions'
import {NextSeo} from 'next-seo'
import '../assets/styles/font.min.css'
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
                  <NextSeo    noindex={true}
                title='LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="https://www.lolsmurf.net/cart"
                />
          
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
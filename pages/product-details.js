import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Breadcrumb from '../components/Common/Breadcrumb';
import Footer from '../components/Layout/Footer';
import ProductImage from '../components/product-details/ProductImage';
import ProductContent from '../components/product-details/ProductContent';
import DetailsTab from '../components/product-details/DetailsTab';
import RelatedProducts from '../components/product-details/RelatedProducts';
import Facility from '../components/shop-style-one/Facility';
import { connect } from 'react-redux';
import {checkIfWeHaveThatAmountOfAccs} from '../store/actions/accountsActions'
import { ToastContainer, toast, Slide } from 'react-toastify';

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
                <Breadcrumb title={this.getRegionName()} />

                <section className="products-details-area pt-60">
                    <div className="container">
                        <div className="row">
                            <ToastContainer transition={Slide} />
                            <ProductImage image={this.props.product.image} />
                            <ProductContent />
                            <DetailsTab />
                        </div>
                    </div>
                    <Facility />
                </section>

                <Footer />
            </React.Fragment>
        );
    }
    getRegionName() {       
        return this.props.product.title;
    }
}


const mapStateToProps = (state) => {    
    return {
        product: state.selectedProduct,
        products: state.products
    }
}


export default connect(
    mapStateToProps,{checkIfWeHaveThatAmountOfAccs}
)(Index)
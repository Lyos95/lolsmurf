import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { setProduct } from '../../store/actions/cartActions';
import LazyLoad from 'react-lazyload';

class OfferArea extends Component {
    render() {
        return (
            <LazyLoad once>
                <section className="products-offer-area ptb-60">
                    <div className="container">
                        <div className="products-offer-content">
                            <span>Get the best deal!</span>
                            <h1>$29.95</h1>
                            <p>for a fresh new lvl 30 account</p>
                            <Link href="/product-details">
                                <a onClick={() => {                                 
                                            this.props.viewProductDetails(2)}}  className="btn btn-primary">Buy Now</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </LazyLoad>
        );
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        viewProductDetails: (id) => {dispatch(setProduct(id))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(OfferArea)
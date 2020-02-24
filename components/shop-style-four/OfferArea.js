import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { setProduct } from '../../store/actions/cartActions';

class OfferArea extends Component {
    render() {
        return (
            <section className="products-offer-area ptb-60">
                <div className="container">
                    <div className="products-offer-content">
                        <span>Get the best deal!</span>
                        <h1>9.25$</h1>
                        <p>for a fresh new lvl 30 account</p>
                        <Link href="/product-details">
                            <a onClick={() => {                                 
                                        this.props.viewProductDetails(1)}}  className="btn btn-primary">Buy Now</a>
                        </Link>
                    </div>
                </div>
            </section>
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
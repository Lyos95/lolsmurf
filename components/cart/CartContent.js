import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CartContent extends Component {

    // componentWillUnmount() {
    //     if(this.refs.shipping.checked)
    //         this.props.substractShipping()
    // }

    handleChecked = (e) => {
        if(e.target.checked){
            this.props.addShipping();
            toast.info('Added $6 into total', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        } else {
            this.props.substractShipping();
            toast.error('Removed $6 from total', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    render() {
        return (
            <section className="cart-area ptb-60">
                <ToastContainer transition={Slide} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <form>
                                <div className="cart-table table-responsive">
                                    <CartProduct />
                                </div>

                                <div className="cart-buttons">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7 col-md-7">
                                            <div className="continue-shopping-box">
                                                <Link href="/">
                                                    <a className="btnLOL btn-lightLOL" style={{display: "table",textAlign:"center"}}>Continue Shopping</a>
                                                </Link>
                                            </div>
                                        </div>

                                       
                                    </div>
                                </div>

                                <div className="cart-totals">
                                    <h3>Cart Totals</h3>
                                    <ul>
                                        <li>Total <span><b>${this.props.total.toFixed(2)}</b></span></li>
                                    </ul>
                                    <Link href="/checkout">
                                        <a className="btn btn-primary ">Proceed to Checkout</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        shipping: state.shipping
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartContent)

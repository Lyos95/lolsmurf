import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';

class Cart extends Component {

    state = {
        display: false
    };

    closeCart = () => {
        this.props.onClick(this.state.display);
    }

    renderCartIn = () => {
        if(this.props.products.length > 0){
            let aux2 = this.props.products.map((product,idx) => {
                let aux = product.type.map((data,idx2) =>(
                    <div className="product-cart" key={`${idx}_${idx2}`}>
                    <div className="product-image">
                        <img src={product.image} alt="image" />
                    </div>
    
                    <div className="product-content">
                        <h3>
                            <Link href="#">
                                <a>{product.title}</a>
                            </Link>
                        </h3>
                        <span>BE: {data.be}</span>
                        <div className="product-price">
                            <span>{data.quantity}</span>
                            <span>x</span>
                            <span className="price">${data.price}</span>
                        </div>
                    </div>
                </div>
                ))
                return [...aux]
            }) 
            return aux2 || 'Empty'
        } 
    }

    render() {
        let { products, total } = this.props;
        return (
            <div 
                className="modal right fade show shoppingCartModal" 
                style={{
                    display: "block", paddingRight: "16px"
                }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <button 
                            type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close"
                            onClick={this.closeCart}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>

                        <div className="modal-body">
                            <h3>My Cart ({products.length})</h3>

                            <div className="product-cart-content">

                                {this.renderCartIn()}
                                
                            </div>

                            <div className="product-cart-subtotal">
                                <span>Subtotal</span>

                                <span className="subtotal">${total}</span>
                            </div>

                            <div className="product-cart-btn">
                                <Link href="/checkout">
                                    <a className="btn btn-primary btn-check">Proceed to Checkout</a>
                                </Link>
                                <Link href="/cart">
                                    <a className="btnLOL btn-lightLOL" style={{display:"table"}}>View Shopping Cart</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)
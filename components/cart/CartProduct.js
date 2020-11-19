import React, { Component } from 'react';
import Link from "next/link";
import { connect } from 'react-redux';
import { removeItem, addToCart, subtractQuantity } from '../../store/actions/cartActions';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CartProduct extends Component {

    handleRemove = (id,be) => {
        this.props.removeItem(id,be);

        toast.error('Removed from cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }
    //to add the quantity
    handleAddQuantity = (id,quantity,be)=>{
        let item = this.props.products.find(item=> id === item.id);
        let itemFound = item.type.find(item => item.be === be)
            if(itemFound.stock > quantity){
                this.props.addQuantity(id,be);
            }
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id,be)=>{
        this.props.subtractQuantity(id,be);
    }

    render() {
        let cartItems = this.props.products.length ?
        (
            this.props.products.map((productAux, idx) => {
               let productsAux = productAux.type.map((data,idx2) =>{
                return (
                    <tr key={`${idx}-${idx2}`}>
                        <td className="product-thumbnail">
                            <Link href="#">
                                <a>
                                    <img src={productAux.image} alt="item" />
                                </a>
                            </Link>
                        </td>

                        <td className="product-name">
                            <Link href="#">
                                <a>{productAux.title}</a>
                            </Link>
                            <ul>
                                <li>Region: <strong>{productAux.title}</strong></li>
                                <li>Email: <strong>Unverified</strong></li>
                                <li>BE: <strong>+{data.be} BE</strong></li>
                            </ul>
                        </td>

                        <td className="product-price">
                            <span className="unit-amount">${data.price}</span>
                        </td>

                        <td className="product-quantity">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={()=>{this.handleSubtractQuantity(productAux.id,data.be)}}
                                >
                                    <i className="fas fa-minus"></i>
                                </span>
                                <input 
                                    type="text" 
                                    value={data.quantity} 
                                    readOnly={true}
                                    onChange={e => (e)}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={()=>{this.handleAddQuantity(productAux.id,data.quantity,data.be)}}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>
                        </td>

                        <td className="product-subtotal">
                            <span className="subtotal-amount">${Math.round(data.price * data.quantity * 100)/100}</span>
                            <Link href="#">
                                <a
                                    className="remove"
                                    onClick={(e)=>{e.preventDefault();this.handleRemove(productAux.id,data.be)}}
                                >
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </Link>
                        </td>
                    </tr>
                )
               })

                return [...productsAux]
                
            })
        ): (
            <tr>
                <td className="product-thumbnail" colspan="5">
                    <p>Empty.</p>
                </td>
            </tr>
        );

        return (
            <>
                <ToastContainer transition={Slide} />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id,be) => {dispatch(removeItem(id,be))},
        addQuantity: (id,be) => {dispatch(addToCart(id,be))},
        subtractQuantity: (id,be) => {dispatch(subtractQuantity(id,be))}
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartProduct)

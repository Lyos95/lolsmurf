import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderSummary extends Component {
    render() {
        return (
            <div className="order-table table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">BE</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.products.map((item,idx) =>{
                            let info = item.type.map((data,idx2) =>{
                                return  (
                                    <tr key={`${idx}_${idx2}`}>
                                        <td className="product-name">
                                            <a href="#">{item.title}</a>
                                        </td>
                                        <td className="product-name">
                                            <a href="#">{data.be}</a>
                                        </td>
        
                                        <td className="product-total">
                                            <span className="subtotal-amount">${Math.round(data.price * data.quantity*100)/100}</span>
                                        </td>
                                    </tr>
                                )
                            })
                            return [...info]
                        })}
                        
                        <tr>
                            <td className="total-price">
                                <span>Order Total</span>
                            </td>

                            <td className="product-subtotal">
                               
                            </td>
                            <td className="product-subtotal">
                                <span className="subtotal-amount">${this.props.total + this.props.shipping}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
        total: state.total,
        shipping: state.shipping
    }
}

export default connect(
    mapStateToProps
)(OrderSummary)

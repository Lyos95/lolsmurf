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
                            <th scope="col">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.products.map((data, idx) => (
                            <tr key={idx}>
                                <td className="product-name">
                                    <a href="#">{data.title}</a>
                                </td>

                                <td className="product-total">
                                    <span className="subtotal-amount">${data.price * data.quantity}</span>
                                </td>
                            </tr>
                        ))}
                        
                        <tr>
                            <td className="total-price">
                                <span>Order Total</span>
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

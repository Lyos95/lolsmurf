import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addQuantityWithNumber, setProduct, addToCart } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shipping from './Shipping';

class ProductContent extends Component {
    state = {
        qty: 1,
        max: 1,
        min: 1,
        sizeGuide: false,
        shipModal: false,
        selectedBE: 60000,
        selectedAcc: {}
    };

    componentDidMount(){
            this.props.addedItems.find(item=> 2 === item.id) // buscar el selected product aqui para ver si existe y superponer en quantity del selected product con este 
            let selectedAccount = this.props.product
            let selectedAccountBEData = selectedAccount.type.find(type => type.be === this.state.selectedBE)
            this.setState({selectedAcc:selectedAccountBEData})
            if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                this.setState({qty:0})
            }else {
                this.setState({qty:1})
            }
    }

        price = () => {
            let selectedAccount = this.props.product
            let selectedAccountBEData = selectedAccount.type.find(type => type.be === this.state.selectedBE)
            return selectedAccountBEData.price
        }

        stock = () => {
            let selectedAccount = this.props.product
            let selectedAccountBEData = selectedAccount.type.find(type => type.be === this.state.selectedBE)
            if(selectedAccountBEData.stock > 0){
                if(this.state.qty === 0){
                    this.setState({qty:1})
                }
            }else{
                if(this.state.qty > 0){
                    this.setState({qty:0})
                }
            }
            return selectedAccountBEData.stock
        }

        quantity = () => {
            let selectedAccount = this.props.product
            let selectedAccountBEData = selectedAccount.type.find(type => type.be === this.state.selectedBE)
            return selectedAccountBEData.quantity
        }

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(8, this.state.qty); 

        toast.info('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    IncrementItem = () => {
        this.setState(prevState => {  
            if(((this.stock()-this.quantity()) > 0) && (prevState.qty < (this.stock()-this.quantity()))) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                if(this.quantity() === 0 && this.state.qty === 0){
                    toast.error(`Sorry, we don't have more accounts from ${this.props.product.title} available right now, try it later`, {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                }else {
                    toast.warn(`You have reached the limit of accounts you can purchase, we don't have more accounts available right now`, {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                }
                return prevState.qty;
            }
        });
    }

    DecreaseItem = () => {
        
        this.setState(prevState => {
            if(prevState.qty >= 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return prevState.qty;
            }
        });
    }

    openSizeGuide = () => {
        this.setState({ sizeGuide: true });
    }

    closeSizeGuide = () => {
        this.setState({ sizeGuide: false });
    }

    openShipModal = () => {
        this.setState({ shipModal: true });
    }

    closeShipModal = () => {
        this.setState({ shipModal: false });
    }

    render() {
        const { sizeGuide, shipModal } = this.state;
        return (
            <React.Fragment>
                <div className="col-lg-6 col-md-6">
                    <ToastContainer />
                    <div className="product-details-content">
                        <h3>{this.props.product.title} League of legends account</h3>

                        <div className="price">
                        <span className="new-price"><del>${this.price()*2}</del> <span style={{color:'#c56161'}}>${this.price()}</span></span>
                        </div>

                        <p>Fresh new League of legends acount (level 30), ideal for smurfing</p>

                        <ul className="product-info">                            
                            <li><span>Availability:</span> <a>In stock ({this.stock()} items)</a></li>
                            <li><span>Product:</span> <a>League of Legends lvl 30 account</a></li>
                            <li><span>Email:</span><a>Unverified</a></li>
                            <li><span>Warranty:</span><a> Lifetime warranty</a></li>
                        </ul>

                        <div className="product-size-wrapper">
                            <h4>Region:</h4>
                            <ul>
                                <li className = {this.props.product.id === 2 ? 'active hover-pointer' : 'hover-pointer'}><a onClick={() => {
                                    this.setState({selectedBE:40000})
                                    this.props.setProduct(2);                                  
                                    let item= this.props.products.find(item=> 2 === item.id)
                                    
                                     let selectedAccount = item
                                        let selectedAccountBEData = selectedAccount.type.find(type => type.be === 40000)
                                        if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                            this.setState({qty:0})
                                        }else {
                                            this.setState({qty:1})
                                        }                         
                                }}
                                    
                                    
                                    >NA</a></li>
                                <li className = {this.props.product.id === 1 ? 'active hover-pointer' : 'hover-pointer'}><a onClick={() => {
                                     this.setState({selectedBE:40000})
                                     this.props.setProduct(1);                                  
                                     let item= this.props.products.find(item=> 1 === item.id)
                                     
                                      let selectedAccount = item
                                         let selectedAccountBEData = selectedAccount.type.find(type => type.be === 40000)

                                         if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                             this.setState({qty:0})
                                         }else {
                                             this.setState({qty:1})
                                         }                        
                                }}>EUW</a></li>
                                <li className = {this.props.product.id === 3 ? 'active hover-pointer' : 'hover-pointer'}><a style={{width:"48px"}} onClick={() => {
                                    this.setState({selectedBE:40000})
                                    this.props.setProduct(3);                                  
                                    let item= this.props.products.find(item=> 3 === item.id)
                                    
                                     let selectedAccount = item
                                        let selectedAccountBEData = selectedAccount.type.find(type => type.be === 40000)
                                        if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                            this.setState({qty:0})
                                        }else {
                                            this.setState({qty:1})
                                        }                                  
                                }}>EUNE</a></li>
                                <li className = {this.props.product.id === 4 ? 'active hover-pointer' : 'hover-pointer'}><a onClick={() => {
                                    this.setState({selectedBE:40000})
                                    this.props.setProduct(4);                                  
                                    let item= this.props.products.find(item=> 4 === item.id)
                                    
                                     let selectedAccount = item
                                        let selectedAccountBEData = selectedAccount.type.find(type => type.be === 40000)
                                        if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                            this.setState({qty:0})
                                        }else {
                                            this.setState({qty:1})
                                        }                                
                                }}>TUR</a></li>
                                <li className = {this.props.product.id === 5 ? 'active hover-pointer' : 'hover-pointer'}><a onClick={() => {
                                    this.setState({selectedBE:40000})
                                    this.props.setProduct(5);                                  
                                    let item= this.props.products.find(item=> 5 === item.id)
                                    
                                     let selectedAccount = item
                                        let selectedAccountBEData = selectedAccount.type.find(type => type.be === 40000)
                                        if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                            this.setState({qty:0})
                                        }else {
                                            this.setState({qty:1})
                                        }                                 
                                }}>OCE</a></li>
                            </ul>
                        </div>

                        <div style={{marginTop:"-13px"}} className="product-size-wrapper">
                            <h4>BE:</h4>
                            <ul>
                                <li className = {this.state.selectedBE === 40000 ? 'active hover-pointer' : 'hover-pointer'}><a style={{width:"58px"}}  
                                    onClick={()=>{
                                        this.setState({selectedBE:40000})
                                        let selectedAccount = this.props.product
                                        let selectedAccountBEData = selectedAccount.type.find(type => type.be === 40000)
                                        if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                            this.setState({qty:0})
                                        }else {
                                            this.setState({qty:1})
                                        }  
                                    }}>40.000</a></li>
                                <li className = {this.state.selectedBE === 50000 ? 'active hover-pointer' : 'hover-pointer'}
                                    onClick={()=>{
                                        this.setState({selectedBE:50000})
                                        let selectedAccount = this.props.product
                                        let selectedAccountBEData = selectedAccount.type.find(type => type.be === 50000)
                                        if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                            this.setState({qty:0})
                                        }else {
                                            this.setState({qty:1})
                                        }  
                                    }}
                                ><a style={{width:"58px"}}>50.000</a></li>
                                <li className = {this.state.selectedBE === 60000 ? 'active hover-pointer' : 'hover-pointer'}
                                    onClick={()=>{
                                        this.setState({selectedBE:60000})
                                        let selectedAccount = this.props.product
                                        let selectedAccountBEData = selectedAccount.type.find(type => type.be === 60000)
                                        if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                            this.setState({qty:0})
                                        }else {
                                            this.setState({qty:1})
                                        }  
                                    }}
                                ><a style={{width:"58px"}}>60.000</a></li>
                                <li className = {this.state.selectedBE === 70000 ? 'active hover-pointer' : 'hover-pointer'}
                                    onClick={()=>{
                                        this.setState({selectedBE:70000})
                                        let selectedAccount = this.props.product
                                        let selectedAccountBEData = selectedAccount.type.find(type => type.be === 70000)
                                        if(selectedAccountBEData.stock-selectedAccountBEData.quantity === 0){
                                            this.setState({qty:0})
                                        }else {
                                            this.setState({qty:1})
                                        }  
                                    }}
                                ><a style={{width:"58px"}}>70.000</a></li>
                            </ul>
                        </div>

                        <div className="product-info-btn">
                            <a href="mailto:support@lolsmurf.net"><i className="far fa-envelope"></i> Ask about this product</a>
                        </div>

                        <div className="product-add-to-cart">
                            <div className="input-counter">
                                <span 
                                    className="minus-btn"
                                    onClick={this.DecreaseItem}
                                >
                                    <i className="fas fa-minus"></i>
                                </span>
                                <input 
                                    type="text" 
                                    value={this.state.qty}
                                    onChange={e => this.setState({ qty: e.target.value })}
                                />
                                <span 
                                    className="plus-btn"
                                    onClick={this.IncrementItem}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>
                        </div>

                        <div className="buy-checkbox-btn">
                   

                            <div className="item">
                                <Link href="/cart">
                                    <a onClick={(e) => {
                                            for(var i = 0; i< this.state.qty; i++){
                                                this.props.addToCart(this.props.product.id,this.state.selectedBE);
                                            }
                                            
                                        }}
                                     className="btn btn-primary buy-btn">Buy it now!</a>
                                </Link>
                            </div>
                        </div>

                        <div className="custom-payment-options">
                            <span>Guaranteed safe checkout:</span>

                            <div className="payment-methods">
                                <a href="#">
                                    <img src={require("../../images/payment-image/2.svg")} alt="image"/>
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/3.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/4.svg")} alt="image" />
                                </a>
                                <a href="#">
                                    <img src={require("../../images/payment-image/7.svg")} alt="image" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                { shipModal ? <Shipping closeShipModal={this.closeShipModal} /> : '' }
            </React.Fragment>
        );
    }
    
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        product: state.selectedProduct,
        addedItems: state.addedItems
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))},
        setProduct: (id) => {dispatch(setProduct(id))},
        addToCart: (id,be) => { dispatch(addToCart(id,be)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContent)
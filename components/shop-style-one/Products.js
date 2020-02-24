import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, addToCompare, setProduct } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip'
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickView from '../Modal/QuickView';

class Products extends Component {

    state = {
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null
    };

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    handleAddToCart = (id) => {
        let item= this.props.products.find(item=> id === item.id)
        let addedItem= this.props.addedItems.find(item=> id === item.id)
        if((!addedItem && item.stock > 0) || (addedItem && addedItem.quantity < addedItem.stock)){
            this.props.addToCart(id); 
    
            toast.info('Added to the cart', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }else {
            toast.error(`Sorry, we don't have more accounts from ${item.title} available right now, try it later`, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    handleAddToCompare = (id) => {
        this.props.



        this.props.addToCompare(id); 

        toast.info('Added to the compare', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }


    render() {
        let { products,viewProductDetails } = this.props;
        const { modalOpen } = this.state;
        return (
            <section className="all-products-area pb-60">
                <ReactTooltip  />
                <ToastContainer transition={Slide} />
                <div className="container">
                    <div className="tab products-category-tab">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <ul className="tabs">
                                    <li
                                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                                        className="current"
                                    >
                                        <a href="#">
                                            <span className="dot"></span> Products
                                        </a>
                                    </li>    
                                </ul>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="tab_content">                                   
                                    <div id="tab1" className="tabs_item">
                                        <div className="row">

                                            {products.map((data, idx) => (
                                                <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={idx}>
                                                    <div className="single-product-box">
                                                        <div className="product-image">
                                                            <Link href="/product-details">
                                                                <a>
                                                                    <img onClick={() => {viewProductDetails(data.id)}} src={data.image} alt="image" />
                                                                </a>
                                                            </Link>                                                          
                                                        </div>

                                                        <div className="product-content">
                                                            <h3>
                                                                <Link href="/product-details">
                                                                    <a><b>{data.title}</b></a>
                                                                </Link>
                                                            </h3>

                                                            <div className="product-price">
                                                                <span className="new-price">${data.price}</span>
                                                            </div>

                                                            <Link href="/product-details">
                                                                <a 
                                                                    className="btn btn-light"
                                                                    onClick={() => {viewProductDetails(data.id)}}
                                                                >
                                                                    Buy now!
                                                                </a>
                                                                
                                                            </Link>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    image={this.state.modalImage} 
                    price={this.state.price}
                /> : '' }
            </section>
        );
    }
}

/*
<Link href="#">
<a 
    className="btn btn-light margin-top-region"
    onClick={(e) => {
        e.preventDefault(); this.handleAddToCart(data.id)
    }}
>
    Add cart
</a>

</Link>
*/
const mapStateToProps = (state) => {
    return {
        products: state.products,
        CompareProducts: state.addedItemsToCompare,
        addedItems: state.addedItems
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id)) },
        addToCompare: (id) => { dispatch(addToCompare(id)) },
        viewProductDetails: (id) => {dispatch(setProduct(id))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)

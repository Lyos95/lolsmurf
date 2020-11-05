import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import QuickView from '../Modal/QuickView';

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
}

class RelatedProducts extends Component {
    state = { 
        display: false,
        modalOpen: false,
        modalImage: '',
        price: 0,
        idd: null
    };

    handleAddToCart = (id) => {
        this.props.addToCart(id); 

        toast.info('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (image, price, id) => {
        this.setState({ 
            modalImage: image, 
            price: price,
            idd: id
        });
    }

    render() {
        let { products } = this.props;
        const { modalOpen } = this.state;
        return (
            <React.Fragment>
                <ReactTooltip />
                <ToastContainer transition={Slide} />
                <div class="related-products-area">
                    <div class="container">
                        <div class="section-title">
                            <h2><span className="dot"></span> Related Products</h2>
                        </div>

                        <div class="row">
                            {this.state.display ? <OwlCarousel 
                                className="trending-products-slides-two owl-carousel owl-theme"
                                {...options}
                            >
                                {products.map((data, idx) => (
                                    <div className="col-lg-12 col-md-12" key={idx}>
                                        <div className="single-product-box">
                                            <div className="product-image">
                                                <Link href="/product-details">
                                                    <a>
                                                        <img src={data.image} alt="image" />
                                                        
                                                    </a>
                                                </Link>

                                           
                                            </div>

                                            <div className="product-content">
                                                <h3>
                                                    <Link href="#">
                                                        <a>{data.title}</a>
                                                    </Link>
                                                </h3>

                                                <div className="product-price">
                                                    <span className="new-price">$29.95</span>
                                                </div>
                                                
                                                <Link href="#">
                                                    <a 
                                                        className="btn btn-light"
                                                        onClick={(e) => {
                                                            e.preventDefault(); this.handleAddToCart(data.id)
                                                        }}
                                                    >
                                                        Add to Cart
                                                    </a>
                                                    
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    idd={this.state.idd}
                    image={this.state.modalImage} 
                    price={this.state.price}
                /> : '' }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        products: state.products
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RelatedProducts)
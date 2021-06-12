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
        idd: null,
        hoursDisplayed:0,
        minutesDisplayed:0,
        secondsDisplayed:0
    };
    componentDidMount() {
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let countDown = new Date();
        countDown.setHours(23,59,59)
        countDown = countDown.getTime()
        
        this.myInterval = setInterval(() => {    

            let now = new Date().getTime(),
                distance = countDown - now;      
              this.setState({
                  hoursDisplayed:Math.floor((distance % (day)) / (hour)),
                  minutesDisplayed: Math.floor((distance % (hour)) / (minute)),
                  secondsDisplayed:Math.floor((distance % (minute)) / second)
              });
              
      
            if (distance < 0) {
                this.setState({
                    hoursDisplayed:0,
                    minutesDisplayed: 0,
                    secondsDisplayed:0
                });
            }
            
          }, 1000)
      }


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
        let {hoursDisplayed,minutesDisplayed,secondsDisplayed} = this.state
        return (
            <section className="all-products-area pb-60">
                <div className="container-timing">
                    <h1><b><u>Countdown</u></b></h1>
                    <ul>
                        <li><span id="hours">{hoursDisplayed}</span>Hours</li>
                        <li><span id="minutes">{minutesDisplayed}</span>Minutes</li>
                        <li><span id="seconds">{secondsDisplayed}</span>Seconds</li>
                    </ul>
                </div>
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
                                        <h2 href="#">
                                            <span className="dot"></span> League of Legends Smurfs
                                        </h2>
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
                                                            <Link href="/league-of-legends-smurfs">
                                                                <a>
                                                                        <img style={{width:"100%",height:"100%"}} onClick={() => {viewProductDetails(data.id)}} src={data.image} alt={data.imageALT} />
                                                   
                                                                </a>
                                                            </Link>                                                          
                                                        </div>

                                                        <div className="product-content">
                                                            <h3 className="region-label"> 
                                                                <Link href="/league-of-legends-smurfs">                                    
                                                                    <a>   <b style={{color: "#222222b8"}}>League of Legends Smurf</b> <br />
                                                                        <b>{data.title}</b></a>
                                                                </Link>
                                                            </h3>
                                                     

                                                            <Link href="/league-of-legends-smurfs">
                                                                <a 
                                                                    className="btnLOL btn-lightLOL"
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

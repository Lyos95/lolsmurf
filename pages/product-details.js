import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Breadcrumb from '../components/Common/Breadcrumb';
import Footer from '../components/Layout/Footer';
import ProductImage from '../components/product-details/ProductImage';
import ProductContent from '../components/product-details/ProductContent';
import DetailsTab from '../components/product-details/DetailsTab';
import RelatedProducts from '../components/product-details/RelatedProducts';
import Facility from '../components/shop-style-one/Facility';
import { connect } from 'react-redux';
import {checkIfWeHaveThatAmountOfAccs} from '../store/actions/accountsActions'
import { ToastContainer, toast, Slide } from 'react-toastify';
import { ProductJsonLd } from 'next-seo';

class Index extends Component {

    state = {
        hoursDisplayed:0,
        minutesDisplayed:0,
        secondsDisplayed:0
    };

    async componentDidMount() {
      
            let approval =  await this.props.checkIfWeHaveThatAmountOfAccs()

            
            if(!approval){
              toast.info('We have updated your cart, we no longer have that amount of accounts', {
                  position: "bottom-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true
              });
          }
      
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
    render() {
        let {hoursDisplayed,minutesDisplayed,secondsDisplayed} = this.state
        return (
            <React.Fragment>
                 <NextSeo 
                title='▷LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="'https://www.lolsmurf.net/product-details"
                />
                 <ProductJsonLd
      productName="lol unranked"
      description="Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅"
      brand="League of legends"
      reviews={[
        {
          author: {
            type: 'Person',
            name: 'Peter',
          },
          datePublished: '2019-01-06T03:37:40Z',
          reviewBody:
            'This is my favorite product yet!',
          name: 'So awesome!!!',
          reviewRating: {
            bestRating: '5',
            ratingValue: '5',
            worstRating: '1',
          },
          publisher: {
            type: 'Organization',
            name: 'TwoVit',
          },
        },
      ]}
      aggregateRating={{
        ratingValue: '4.7',
        reviewCount: '89',
      }}
      offers={[
        {
          price: '9.25',
          priceCurrency: 'USD',
          priceValidUntil: '2030-11-05',
          itemCondition: 'http://schema.org/NewCondition',
          availability: 'http://schema.org/InStock',
          url: 'https://www.lolsmurf.net/product-details',
          seller: {
            name: 'LolSmurf',
          },
        }
      ]}
      mpn="9737485"
    />
                <Navbar />
                <Breadcrumb title={this.getRegionName()} />
                <div className="container-timing-details">
                    <h4><b><u>Countdown</u></b></h4>
                    <ul>
                        <li><span id="hours">{hoursDisplayed}</span>Hours</li>
                        <li><span id="minutes">{minutesDisplayed}</span>Minutes</li>
                        <li><span id="seconds">{secondsDisplayed}</span>Seconds</li>
                    </ul>
                </div>
                <section className="products-details-area pt-60">
                    <div className="container">
                        <div className="row">
                            <ToastContainer transition={Slide} />
                            <ProductImage image={this.props.product.image} />
                            <ProductContent />
                            <DetailsTab />
                        </div>
                    </div>
                    <Facility />
                </section>

                <Footer />
            </React.Fragment>
        );
    }
    getRegionName() {       
        return this.props.product.title;
    }
}


const mapStateToProps = (state) => {    
    return {
        product: state.selectedProduct,
        products: state.products
    }
}


export default connect(
    mapStateToProps,{checkIfWeHaveThatAmountOfAccs}
)(Index)
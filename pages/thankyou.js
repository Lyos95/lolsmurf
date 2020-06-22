import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Facility from '../components/shop-style-one/Facility';
import Footer from '../components/Layout/Footer';
import { connect } from 'react-redux'
import {NextSeo} from 'next-seo'
import Pixel from '../components/Pixel'

class Index extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        function getImage(region) {
            switch (region) {
                case 'EUW':
                    return require('../assets/regions/demacia.jpg')
                case 'TURK':
                    return require('../assets/regions/Shuriman.jpg')
                case 'EUNE':
                    return require('../assets/regions/flelyor.jpg')
                case 'NA':
                    return require('../assets/regions/Noxus.jpg')
                case 'PBE':
                    return require('../assets/regions/Piltober.jpg')
                default:
                    break;
            }
        }

        let getName = (region) => {
            switch (region) {
                case 'EUW': 
                    return 'EU WEST'
                case 'TURK': 
                    return 'TURKEY'
                case 'EUNE':
                    return 'EU NORDIC & EAST'
                case 'NA': 
                    return 'NA'
                case 'PBE':
                    return 'PBE'
                default:
                    break;
            }
        }

        let cartItems = this.props.products.length ?
            (
                
                
                this.props.products.map((data, idx) => {
                    return (
                        <tr key={idx}>
                            <td className="product-thumbnail">
                                <Link href="#">
                                    <a>
                                        <img src={getImage(data.region)} alt="item" />
                                    </a>
                                </Link>
                            </td>

                            <td className="product-name">
                                <Link href="#">
                                    <a>{getName(data.region)}</a>
                                </Link>
                            </td>

                            <td className="product-price">
                                {data.nickName}
                            </td>
                            <td className="product-price">
                                {data.password}
                            </td>                        
                        </tr>
                    )
                })
            ) : (
                <tr>
                    <td className="product-thumbnail" colspan="5">
                        <p>Empty.</p>
                    </td>
                </tr>
            );

        return (
            <React.Fragment>
                <Pixel name='FACEBOOK_PIXEL_1' />
               <NextSeo    noindex={true}
                title='▷LolSmurf - Best League of Legends smurfs'
                description= 'Level 30 &amp; Unranked ✅- Lifetime Guarantee ✅ Instant Delivery ⚡⚡- 100% Buyer Satisfaction ✅'
                canonical="'https://www.lolsmurf.net/thankyou"
                />
                <Navbar />

                <div className="thank-you-area">
                    <div className="container">
                        <h1>Thank You!</h1>
                        <h6>We have also sent you an email to  <b>{(this.props.products && this.props.products[0])? this.props.products[0].email : 'Summoner'}</b> with all the following information, if you haven't revieved an email, check your spam</h6>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="cart-table table-responsive">
                                        <table className="table table-bordered" style={{ marginTop: '40px', marginBottom: '60px' }}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Password</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/">
                            <a className="btn btn-primary">Go Home</a>
                        </Link>
                    </div>
                </div>

                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.soldAccounts
    }
}

export default connect(
    mapStateToProps,
    null
)(Index)

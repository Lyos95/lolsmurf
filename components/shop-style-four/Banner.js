import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { setProduct } from '../../store/actions/cartActions';
import LazyLoad from 'react-lazyload';

class Banner extends Component {
    render() {
        return (
            <LazyLoad once>
                <div className="main-banner main-banner-three">
                <img style={{
                        zIndex:'-1',
                        pointerEvents: 'none',
                        position: 'absolute',
                        width: "100%",
                        height: "100%",
                        filter: 'brightness(80%)'
                    }} src={require('../../assets/pictures/mainbanner.jpg')}></img>
                    <div style={{zIndex:2}} className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content white-color">
                                    <span>Best league of legends smurf marketplace</span>
                                    <h1>BUY YOUR SMURF NOW!</h1>
                                    <p>Available for all countries</p>
                                    <Link href="/league-of-legends-smurfs">
                                        <a onClick={() => {                                 
                                            this.props.viewProductDetails(2)}} className="btn btn-primary">Buy now</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </LazyLoad>            
        );
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        viewProductDetails: (id) => {dispatch(setProduct(id))}
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Banner)
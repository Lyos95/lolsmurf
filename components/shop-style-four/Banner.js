import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { setProduct } from '../../store/actions/cartActions';


class Banner extends Component {
    render() {
        return (
      
            <div className="main-banner-three-container">
                <div className="main-banner main-banner-three ">
                   <img src={require("../../assets/pictures/mainbanner.jpg")}></img>                  
                </div>
            </div>         
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
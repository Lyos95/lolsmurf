import React, { Component } from 'react';

class ProductImage extends Component {

    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
      }

    render() {
        return (
            <div className="col-lg-6 col-md-6">
                <div className="products-page-gallery">
                    <div className="product-page-gallery-main">
                       <div>
                           <div className="move-bottom margin-picture-acc">

                            <img src={this.props.image}></img>

                           </div>
                       </div>
                    </div>

                  
                </div>
            </div>
        );
    }
}

export default ProductImage;

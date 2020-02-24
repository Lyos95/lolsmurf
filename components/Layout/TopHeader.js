import React, { Component } from 'react';
import Link from 'next/link';

class TopHeader extends Component {

    state = {
        display: false
    };



    render() {
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">
                                    <li><Link href="/about"><a>About</a></Link></li>
                                    <li><Link href="/faq"><a>FAQ's</a></Link></li>
                                    <li><Link href="/contact-us"><a>Contact</a></Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-5 col-md-6">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TopHeader;

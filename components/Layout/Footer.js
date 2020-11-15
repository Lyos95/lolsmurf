import React, { Component } from 'react';
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="index.html">
                                        <a>
                                            <img style={{width:"212px",height:"46px"}} src={require("../../images/logo2.jpg")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                <p>Best League of legends smurfs shop. The cheapest and the most trustworthy store for buying league of legends accounts</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li><Link href="/about"><a >About Us</a></Link></li>
                                    <li><Link href="/faq"><a>FAQ's</a></Link></li>
                                    <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Information</h3>

                                <ul className="information-links">
                                <li><Link href="/about"><a >About Us</a></Link></li>
                                    <li><Link href="/faq"><a>FAQ's</a></Link></li>
                                    <li><Link href="/contact-us"><a>Contact Us</a></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>

                                <ul className="footer-contact-info">
                                    <li><i className="far fa-envelope"></i> Email Us: <a href="mailto:support@lolsmurf.net">support@lolsmurf.net</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @ 2019 LolSmurf. All Rights Reserved</p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul className="payment-card">
                                    <li>
                                        <a href="#" target="_blank">
                                            <img style={{width:"47px",height:"37px"}} src={require("../../images/visa.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img style={{width:"48px",height:"37px"}} src={require("../../images/mastercard.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img style={{width:"48px",height:"37px"}} src={require("../../images/mastercard2.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img style={{width:"47px",height:"36px"}} src={require("../../images/visa2.png")} alt="image" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target="_blank">
                                            <img style={{width:"48px",height:"36px"}} src={require("../../images/expresscard.png")} alt="image" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
